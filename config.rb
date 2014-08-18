# ----------------------------------------------
# Basic Setup
# ----------------------------------------------
# Reload the browser automatically whenever files change
activate :livereload
# Use relative URLs
activate :relative_assets
set :relative_links, true
# Use pretty URLs
activate :directory_indexes
# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# ----------------------------------------------
# Page Processing
# ----------------------------------------------
require 'slim'
set :slim, :pretty => true

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :autolink => true, :smartypants => true

# ----------------------------------------------
# CSS Processing
# ----------------------------------------------
# Compass
compass_config do |config|
  config.output_style = :expanded
end

# Susy grids in Compass
# First: gem install susy --pre
require 'susy'

# ----------------------------------------------
# Page options, layouts, aliases and proxies
# ----------------------------------------------

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

# Generate speaker pages from /data/speakers.yml
data.speakers.each do |speaker|
  proxy "/speakers/#{speaker[:firstName].downcase.tr(" ", "-").tr(".", "")}-#{speaker[:lastName].downcase.tr(" ", "-").tr(".", "")}.html", "/speakers/template.html", :locals => { :speaker => speaker }, :ignore => true
end

# Generate schedule detail pages from /data/speakers.yml
data.speakers.each do |speaker|
  proxy "/schedule/#{speaker[:talkTitle].downcase.tr(" ", "-").tr(".", "").tr(":", "")}.html", "/schedule/template.html", :locals => { :speaker => speaker }, :ignore => true
end

page "/2014.html", :layout => :bare_layout

# ----------------------------------------------
# Helpers
# ----------------------------------------------

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# KSS
helpers do
 # Calculate the years for a copyright
  def copyright_years(start_year)
    end_year = Date.today.year
    if start_year == end_year
      start_year.to_s
    else
      start_year.to_s + '-' + end_year.to_s
    end
  end
end

# ----------------------------------------------
# Directories
# ----------------------------------------------
set :css_dir, 'assets/stylesheets'

set :js_dir, 'assets/javascripts'

set :images_dir, 'assets/images'

# ----------------------------------------------
# International
# ----------------------------------------------
# activate :translation_helper
# activate :directory_indexes
# activate :i18n, :mount_at_root => :en

# ----------------------------------------------
# Build-specific configuration
# ----------------------------------------------
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Change Compass configuration
  compass_config do |config|
    # config.preferred_syntax   = :sass
    config.output_style = :compressed
    config.sass_options = { :line_comments => false}
  end

  # Compress PNGs after build
  # First: gem install middleman-smusher
  require "middleman-smusher"
  activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
