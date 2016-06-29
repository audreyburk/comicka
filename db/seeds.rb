# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: "jyllian", password: "demoaccount"});
User.create({username: "wicker", password: "wicker"});

Comic.create({
  title:"Gunnerkrigg Court",
  shortname:"gunnerkrigg",
  creator_id:1,
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

Page.create({
  comic_id: 1,
  image_url: "a",
  thumb_url: "b"
})

Page.create({
  comic_id: 1,
  image_url: "a",
  thumb_url: "b"
})

Page.create({
  comic_id: 1,
  image_url: "a",
  thumb_url: "b"
})

Page.create({
  comic_id: 1,
  image_url: "a",
  thumb_url: "b"
})

Page.create({
  comic_id: 2,
  image_url: "a",
  thumb_url: "b"
})

Page.create({
  comic_id: 2,
  image_url: "a",
  thumb_url: "b"
})
