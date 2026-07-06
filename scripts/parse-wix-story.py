#!/usr/bin/env python3
"""Parse a Wix story page HTML into ordered paragraph/figure blocks."""
import html
import json
import re
import sys
from urllib.parse import unquote


def norm_name(s: str) -> str:
	s = unquote(s).replace('.jpg', '').replace('.jpeg', '')
	s = s.replace('&', ' and ')
	return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-') + '.jpg'


def find_manifest_name(manifest: list[str], wix_name: str) -> str:
	normalized = norm_name(wix_name)
	if normalized in manifest:
		return normalized
	nn = normalized.replace('-', '')
	for m in manifest:
		if m.replace('-', '') == nn:
			return m
	raise ValueError(f'No match: {wix_name} -> {normalized}')


def extract_article(content: str, title: str) -> str:
	start = content.find('>' + title + '<')
	if start < 0:
		start = content.find(title)
	if start < 0:
		raise ValueError(f'Title not found: {title}')
	end = len(content)
	for marker in ['Copyright', 'bottom of page']:
		pos = content.find(marker, start + 100)
		if pos > 0:
			end = min(end, pos)
	return content[start:end]


def parse_blocks(article_html: str, manifest: list[str]) -> list[dict]:
	skip = {
		'top of page',
		'bottom of page',
		'Home',
		'Stories',
		'Games',
		'About Us',
		'Community',
		'News & Events'
	}
	events: list[tuple[int, str, str]] = []

	for m in re.finditer(r'(?:alt|quality_auto)/([^#\"?\s]+\.jpg(?:\s2x)?)', article_html, re.I):
		wix_img = unquote(m.group(1).removesuffix(' 2x'))
		try:
			manifest_img = find_manifest_name(manifest, wix_img)
			events.append((m.start(), 'img', manifest_img))
		except ValueError:
			pass

	for m in re.finditer(
		r'<p[^>]*class="[^"]*rich-text[^"]*"[^>]*>(.*?)</p>', article_html, re.DOTALL | re.I
	):
		inner = m.group(1)
		text = re.sub(r'<[^>]+>', '', inner)
		text = html.unescape(text).strip()
		text = re.sub(r'\s+', ' ', text)
		if (
			len(text) > 10
			and text not in skip
			and 'Get Started' not in text
			and 'built on Wix' not in text
		):
			events.append((m.start(), 'para', text))

	events.sort(key=lambda x: x[0])
	blocks: list[dict] = []
	seen_imgs: set[str] = set()
	seen_paras: set[str] = set()

	for _, typ, val in events:
		if typ == 'img':
			if val in seen_imgs:
				continue
			seen_imgs.add(val)
			blocks.append({'type': 'figure', 'src': val})
		else:
			if val in seen_paras:
				continue
			seen_paras.add(val)
			blocks.append({'type': 'paragraph', 'text': val})

	merged: list[dict] = []
	i = 0
	while i < len(blocks):
		if blocks[i]['type'] == 'figure':
			figs: list[str] = []
			while i < len(blocks) and blocks[i]['type'] == 'figure':
				figs.append(blocks[i]['src'])
				i += 1
			if len(figs) == 1:
				merged.append({'type': 'figure', 'src': figs[0]})
			else:
				merged.append({'type': 'figure-stack', 'figures': figs})
		else:
			merged.append(blocks[i])
			i += 1

	return merged


def main() -> None:
	slug = sys.argv[1]
	wix_title = sys.argv[2]
	manifest = json.loads(sys.argv[3])
	html_content = sys.stdin.read()
	article = extract_article(html_content, wix_title)
	blocks = parse_blocks(article, manifest)
	print(json.dumps(blocks))


if __name__ == '__main__':
	main()
