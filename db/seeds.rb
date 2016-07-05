require 'faker'

User.create({username: "tom siddell", password: "coyote"});
User.create({username: "BobArtist", password: "password"});
User.create({username: "elsa_kroese", password: "password"});
User.create({username: "zurisu", password: "password"});
User.create({username: "c_major", password: "password"});
User.create({username: "David Troupes", password: "password"});
User.create({username: "tober", password: "password"});
User.create({username: "evandahm", password: "password"});
User.create({username: "minna", password: "password"});

User.create({username: "jyllian", password: "demoaccount"});
User.create({username: "wicker", password: "wicker"});

Comic.create({
  title:"Gunnerkrigg Court",
  shortname:"gunnerkrigg",
  creator_id:1,
  thumb_url:"http://i.imgur.com/BP9GO6T.jpg",
  banner_url:"http://i.imgur.com/cnpwwWx.jpg"
})

Comic.create({
  title:"Demon of the Underground",
  shortname:"dotu",
  creator_id:2,
  thumb_url:"http://i.imgur.com/837wBXN.jpg",
  banner_url:"http://www.bob-artist.com/demon/nav/headerimage.jpg"
})

Comic.create({
  title:"Spindrift",
  shortname:"spindrift",
  creator_id:3,
  thumb_url:"http://i.imgur.com/nak6AET.jpg",
  banner_url:"http://orig02.deviantart.net/473d/f/2011/250/a/d/ad11388afa758c01cbb33e28d8c2c52e-d494peu.jpg"
})

Comic.create({
  title:"Exvulnerum",
  shortname:"exvulnerum",
  creator_id:4,
  thumb_url:"http://i.imgur.com/u5GGoYE.png",
  banner_url:"http://i.imgur.com/PddnTE9.jpg"
})

Comic.create({
  title:"Sombulus",
  shortname:"sombulus",
  creator_id:5,
  thumb_url:"http://i.imgur.com/zvjnQnI.jpg",
  banner_url:"http://i.imgur.com/3lEd0cP.jpg"
})

Comic.create({
  title:"Buttercup Festival",
  shortname:"buttercup",
  creator_id:6,
  thumb_url:"http://i.imgur.com/cCqYit1.png",
  banner_url:"http://i.imgur.com/y9RJFT7.png"
})

Comic.create({
  title:"Blood Splattered Socks",
  shortname:"bss",
  creator_id:7,
  thumb_url:"http://i.imgur.com/9lcPvi9.jpg"
})

Comic.create({
  title:"Vattu",
  shortname:"vattu",
  creator_id:8,
  thumb_url:"http://i.imgur.com/XSe8O3d.jpg"
})

Comic.create({
  title:"Stand Still. Stay Silent.",
  shortname:"ssss",
  creator_id:9,
  thumb_url:"http://i.imgur.com/Sg1roi5.jpg",
  banner_url: "http://i.imgur.com/ZKsjXaV.jpg"
})




url = "http://www.gunnerkrigg.com/comics/"
1000.times do |i|
  current_url = url + (i+1).to_s.rjust(8, "0") + ".jpg"
  Page.create({
      comic_id: 1,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.bob-artist.com/demon/img/comic/"
202.times do |i|
  current_url = url + (i+1).to_s + ".jpg"
  Page.create({
      comic_id: 2,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.spindrift-comic.com/static/pages/chapter0/"
11.times do |i|
  current_url = url + i.to_s.rjust(2, "0") + ".jpg"
  Page.create({
      comic_id: 3,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.spindrift-comic.com/static/pages/chapter1/"
76.times do |i|
  current_url = url + i.to_s.rjust(2, "0") + ".jpg"
  Page.create({
      comic_id: 3,
      page_number: (i+11),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.spindrift-comic.com/static/pages/chapter2/"
25.times do |i|
  current_url = url + (i + 76).to_s.rjust(2, "0") + ".jpg"
  Page.create({
      comic_id: 3,
      page_number: (i+86),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://zules.com/exvulnerum/pages/"
242.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  Page.create({
      comic_id: 4,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.sombulus.com/comic/image/"
631.times do |i|
  current_url = url + (i + 1).to_s
  Page.create({
      comic_id: 5,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.buttercupfestival.com/2-"
143.times do |i|
  next if i == 12 || i == 30
  current_url = url + (i + 1).to_s + ".png"
  Page.create({
      comic_id: 6,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end

url = "http://www.bloodsplatteredsocks.com/pages/"
407.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  Page.create({
      comic_id: 7,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end

url = "http://www.rice-boy.com/vattu/"
759.times do |i|
  current_url = url + (i + 1).to_s.rjust(3, "0") + ".png"
  Page.create({
      comic_id: 8,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end

url = "http://www.sssscomic.com/comicpages/"
557.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  Page.create({
      comic_id: 9,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end
