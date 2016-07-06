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
User.create({username: "foglios", password: "password"});
User.create({username: "emily_carroll", password: "password"});
User.create({username: "kris", password: "password"});
User.create({username: "penny_arcade", password: "password"});
User.create({username: "michelle", password: "password"});
User.create({username: "DavidMalki", password: "password"});
User.create({username: "ursula", password: "password"});
User.create({username: "Tracy_Butler", password: "password"});
User.create({username: "Kadi", password: "password"});
User.create({username: "ashleycope", password: "password"});

User.create({username: "jyllian", password: "demoaccount"});
User.create({username: "wicker", password: "wicker"});


Comic.create({
  title:"Demon of the Underground",
  shortname:"dotu",
  creator_id:2,
  thumb_url:"http://i.imgur.com/837wBXN.jpg",
  banner_url:"http://www.bob-artist.com/demon/nav/headerimage.jpg"
})

Comic.create({
  title:"Stand Still. Stay Silent.",
  shortname:"ssss",
  creator_id:9,
  thumb_url:"http://i.imgur.com/Sg1roi5.jpg",
  banner_url: "http://i.imgur.com/ZKsjXaV.jpg"
})

Comic.create({
  title:"Gunnerkrigg Court",
  shortname:"gunnerkrigg",
  creator_id:1,
  thumb_url:"http://i.imgur.com/BP9GO6T.jpg",
  banner_url:"http://i.imgur.com/cnpwwWx.jpg"
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
  title:"Girl Genius",
  shortname:"girlgenius",
  creator_id:9,
  thumb_url:"http://cdn1.bigcommerce.com/server3400/v4eyu8t/products/1922/images/2433/Science_Magic_Brown_1__30320.1429551688.1280.1280.jpg?c=2"
})

Comic.create({
  title:"Emily Carroll's Comics",
  shortname:"carroll",
  creator_id:10,
  thumb_url:"http://i.imgur.com/lu5mjOp.jpg"
})

Comic.create({
  title:"Starslip",
  shortname:"starslip",
  creator_id:11,
  thumb_url:"http://cdn.shopify.com/s/files/1/0065/5862/products/starslip4_large_1024x1024.png?v=1305244727"
})

Comic.create({
  title:"Penny Arcade",
  shortname:"penny_arcade",
  creator_id:12,
  thumb_url:"http://i.imgur.com/GoVhwTL.jpg"
})

Comic.create({
  title:"Ava's Demon",
  shortname:"avas_demon",
  creator_id:13,
  thumb_url:"http://i.imgur.com/dneaVbv.png"
})

Comic.create({
  title:"Wondermark",
  shortname:"wondermark",
  creator_id:14,
  thumb_url:"http://i1.wp.com/wondermark.com/wp-content/uploads/2009/11/wondermark-turctopus.png"
})

Comic.create({
  title:"A Redtail's Dream",
  shortname:"redtail",
  creator_id:9,
  thumb_url:"http://i.imgur.com/RnTQKoB.jpg"
})

Comic.create({
  title:"Digger",
  shortname:"digger",
  creator_id:15,
  thumb_url:"http://www.writeups.org/wp-content/uploads/Boneclaw-Mother-Digger.jpg"
})

Comic.create({
  title:"Lackadaisy",
  shortname:"lackadaisy",
  creator_id:16,
  thumb_url:"http://i.imgur.com/cdwTezn.jpg"
})

Comic.create({
  title:"Blindsprings",
  shortname:"blindsprings",
  creator_id:17,
  thumb_url:"http://i.imgur.com/Akm0lRA.jpg"
})

Comic.create({
  title:"Unsounded",
  shortname:"unsounded",
  creator_id:18,
  thumb_url:"http://i.imgur.com/BTojR5R.jpg"
})











url = "http://www.bob-artist.com/demon/img/comic/"
202.times do |i|
  current_url = url + (i+1).to_s + ".jpg"
  Page.create({
    comic_id: 1,
    page_number: (i+1),
    image_url: current_url,
    thumb_url: current_url,
    title: Faker::Book.title,
    caption: Faker::Hacker.say_something_smart
    })
  end

url = "http://www.sssscomic.com/comicpages/"
557.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  Page.create({
      comic_id: 2,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end

url = "http://www.gunnerkrigg.com/comics/"
1000.times do |i|
  current_url = url + (i+1).to_s.rjust(8, "0") + ".jpg"
  Page.create({
      comic_id: 3,
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
      comic_id: 4,
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
      comic_id: 4,
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
      comic_id: 4,
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
      comic_id: 5,
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
      comic_id: 6,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end

url = "http://www.buttercupfestival.com/2-"
143.times do |i|
  next if i == 11 || i == 29
  current_url = url + (i + 1).to_s + ".png"
  Page.create({
      comic_id: 7,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end

url = "http://www.bloodsplatteredsocks.com/pages/"
407.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  Page.create({
      comic_id: 8,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end

url = "http://www.rice-boy.com/vattu/"
759.times do |i|
  current_url = url + (i + 1).to_s.rjust(3, "0") + ".png"
  Page.create({
      comic_id: 9,
      page_number: (i+1),
      image_url: current_url,
      thumb_url: current_url
  })
end
