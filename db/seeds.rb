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
  banner_url:"a"
})

Comic.create({
  title:"Broodhollow",
  shortname:"broodhollow",
  creator_id:1,
  thumb_url:"a",
  banner_url:"a"
})

Comic.create({
  title:"Paranatural",
  shortname:"paranatural",
  creator_id:2,
  thumb_url:"a",
  banner_url:"a"
})

10.times do
  Page.create({ comic_id: 3, image_url: "a", thumb_url: "b" })
  Page.create({ comic_id: 2, image_url: "a", thumb_url: "b" })
end

url = "http://www.gunnerkrigg.com/comics/"
20.times do |i|
  current_url = url + (i+1).to_s.rjust(8, "0") + ".jpg"
  Page.create({
      comic_id: 1,
      image_url: current_url,
      thumb_url: current_url,
      title: Faker::Book.title,
      caption: Faker::Hacker.say_something_smart
  })
end
