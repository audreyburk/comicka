@comics.each do |comic|
  json.set! comic.shortname, comic
end
