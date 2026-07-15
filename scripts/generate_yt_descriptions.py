#!/usr/bin/env python3
"""
Parse content/program.md, extract papers from sessions, and generate yt_descriptions.md.
"""

import yaml
import re

# Read the file
with open("content/program.md", "r") as f:
    content = f.read()

# Find all standalone --- lines (front matter delimiters)
positions = [m.start() for m in re.finditer(r'^---$', content, re.MULTILINE)]

if len(positions) >= 2:
    # The entire content between first and last --- is YAML
    # Strip the delimiters themselves
    yaml_content = content[positions[0] + 3:positions[-1]].strip()
    # Parse it
    data = yaml.safe_load(yaml_content)
    events = data.get("events", [])
else:
    print("ERROR: Could not find front matter delimiters")
    exit(1)

# Mapping from URL field names to display names
LINK_NAMES = {
    "pdf_url": "PDF",
    "doi": "DOI",
    "digilib_url": "Eurographics Digital Library",
    "code_url": "Code",
    "project_url": "Project Page",
    "poster_url": "Poster",
    "url": "Paper",
}

# Fields to check for links (in order of preference)
LINK_FIELDS = ["pdf_url", "doi", "digilib_url", "code_url", "project_url", "poster_url", "url"]

# Hardcoded opening text
OPENING = (
    "This is a recording from the Eurographics Symposium on Geometry Processing "
    "2026 at the University of Bern, Switzerland.\n\n"
    "See https://sgp26.org/ for more information."
)

output_lines = []

for event in events:
    # Skip events that are not sessions with papers
    papers = event.get("papers")
    if not papers:
        continue

    session_title = event.get("title", "Unknown Session")
    session_category = event.get("category", "")

    for paper in papers:
        title = paper.get("title", "Untitled")
        authors = paper.get("authors", "Unknown")

        output_lines.append(f"# {title}")
        output_lines.append("")
        output_lines.append(OPENING.rstrip())
        output_lines.append("")
        output_lines.append(f"Title: {title}")
        output_lines.append(f"Authors: {authors}")
        output_lines.append("")

        # Collect links
        has_links = False
        for field in LINK_FIELDS:
            url = paper.get(field)
            if url:
                link_name = LINK_NAMES.get(field, field.replace("_", " ").title())
                output_lines.append(f" * {link_name}: {url}")
                has_links = True

        if has_links:
            output_lines.append("")

        output_lines.append("---")
        output_lines.append("")

# Write output
with open("content/yt_descriptions.md", "w") as f:
    f.write("\n".join(output_lines))

count = len([l for l in output_lines if l.startswith("# ")])
print(f"Generated yt_descriptions.md with {count} paper sections.")
