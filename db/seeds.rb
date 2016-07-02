require 'faker'

User.create({username: "jyllian", password: "demoaccount"});
User.create({username: "wicker", password: "wicker"});
User.create({username: "TomSiddell", password: "coyote"});
User.create({username: "jordan", password: "jordan"});
User.create({username: "brooke", password: "basket"});

Comic.create({
  title:"Gunnerkrigg Court",
  shortname:"gunnerkrigg",
  creator_id:3,
  thumb_url:"a",
  banner_url:"http://i.imgur.com/cnpwwWx.jpg"
})

Comic.create({
  title:"Ava's Demon",
  shortname:"avas_demon",
  creator_id:1,
  thumb_url:"http://avasdemon.com/start.png",
  banner_url:"http://http://avasdemon.com/tt.png"
})

Comic.create({
  title:"Paranatural",
  shortname:"paranatural",
  creator_id:2,
  thumb_url:"a",
  banner_url:"a"
})

10.times do |i|
  Page.create({ comic_id: 3, image_url: "a", thumb_url: "b", page_number: (i+1) })
  Page.create({ comic_id: 2, image_url: "a", thumb_url: "b", page_number: (i+1) })
end

url = "http://www.gunnerkrigg.com/comics/"
80.times do |i|
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
