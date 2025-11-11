# Natalie Cobo's Personal Website

This is the source code for Natalie Cobo's personal website, built with Jekyll 4.4.1 and deployed using GitHub Actions.

## Development

### Prerequisites

- Ruby 3.2+
- Bundler 2.6+

### Setup

1. Clone the repository
2. Install dependencies: `bundle install`
3. Run the site locally: `bundle exec jekyll serve --port 4001 --livereload`
4. Visit http://localhost:4001 to view the site

Note: Port 4000 is used by macOS Time Machine, so we use port 4001 instead.

### Deployment

The site is automatically deployed using GitHub Actions whenever changes are pushed to the `master` branch.

## Technology

- Jekyll 4.4.1
- GitHub Actions for CI/CD
- SASS for styling
- GitHub Pages for hosting
- jQuery 3.7.1
- Font Awesome 6.7.1

## License

See [LICENSE.txt](LICENSE.txt) for details.
