# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'https://rubygems.org'

gem "middleman", "~> 3.2.1"
gem "middleman-syntax"
gem "middleman-deploy"
gem "middleman-smusher"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]
gem "eventmachine", "~>1.0.3"
require "em/pure_ruby"

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end

# Preprocessors
gem "sass", "~> 3.3.0.rc.2"
gem "compass", "~> 1.0.0.alpha.17"
gem "slim"
gem "redcarpet"

# CSS Grid System
gem "susy", "~> 2.0.0.beta.3"

# Living styleguide generator
# gem "kss"
