Cloudinary::Api.delete_all_resources(:resource_type => :image)

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
  thumb_url:"http://i.imgur.com/837wBXN.jpg"
})

Comic.create({
  title:"Stand Still. Stay Silent.",
  shortname:"ssss",
  creator_id:9,
  thumb_url:"http://i.imgur.com/Sg1roi5.jpg"
})

Comic.create({
  title:"Gunnerkrigg Court",
  shortname:"gunnerkrigg",
  creator_id:1,
  thumb_url:"http://i.imgur.com/BP9GO6T.jpg"
})

Comic.create({
  title:"Spindrift",
  shortname:"spindrift",
  creator_id:3,
  thumb_url:"http://i.imgur.com/nak6AET.jpg"
})

Comic.create({
  title:"Exvulnerum",
  shortname:"exvulnerum",
  creator_id:4,
  thumb_url:"http://i.imgur.com/u5GGoYE.png"
})

Comic.create({
  title:"Sombulus",
  shortname:"sombulus",
  creator_id:5,
  thumb_url:"http://i.imgur.com/zvjnQnI.jpg"
})

Comic.create({
  title:"Buttercup Festival",
  shortname:"buttercup",
  creator_id:6,
  thumb_url:"http://i.imgur.com/cCqYit1.png"
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
  title:"Ava's Demon",
  shortname:"avas_demon",
  creator_id:13,
  thumb_url:"http://i.imgur.com/dneaVbv.png"
})

Comic.create({
  title:"Girl Genius",
  shortname:"girlgenius",
  creator_id:9,
  thumb_url:"http://i.imgur.com/coQfkmr.jpg"
})

# Comic.create({
#   title:"Emily Carroll's Comics",
#   shortname:"carroll",
#   creator_id:10,
#   thumb_url:"http://i.imgur.com/lu5mjOp.jpg"
# })

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

# UNCONFIRMED --------------------------------

url = "http://www.buttercupfestival.com/2-"
7.times do |i|
  current_url = url + (i + 1).to_s + ".png"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 7,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.bloodsplatteredsocks.com/pages/"
168.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 8,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.rice-boy.com/vattu/"
270.times do |i|
  current_url = url + (i + 1).to_s.rjust(3, "0") + ".png"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 9,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.avasdemon.com/pages/"
60.times do |i|
  current_url = url + (i + 1).to_s.rjust(4, "0") + ".png"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 10,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end



GIRL_GENIUS = [
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021104.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021106.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021108.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021111.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021113.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021115.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021118.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021120.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021122.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021125.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021127.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021129.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021202.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021204.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021206.jpg",
  "http://www.girlgeniusonline.com/ggmain/strips/ggmain20021209.jpg"
]

STARSLIP = [
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050523.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050524.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050525.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050526.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050527_c.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050530_b.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050531_d.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050601_j.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050602_g.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050603_m.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050606_q.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050607_q.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050608.gif",
  "http://starslip.chainsawsuit.com/wp-content/uploads/2013/09/20050609.gif"
]

PENNY_ARCADE = [
  "https://photos.smugmug.com/photos/214584757_tSa5c/0/2100x20000/214584757_tSa5c-2100x20000.jpg",
  "https://photos.smugmug.com/photos/i-F32S5dT/2/O/i-F32S5dT.jpg",
  "https://photos.smugmug.com/photos/214585342_k3T4c/0/2100x20000/214585342_k3T4c-2100x20000.jpg",
  "https://photos.smugmug.com/photos/i-nngRb6g/2/O/i-nngRb6g.jpg",
  "https://photos.smugmug.com/photos/i-SNhFjJw/2/O/i-SNhFjJw.jpg",
  "https://photos.smugmug.com/photos/i-DD44Lvm/2/O/i-DD44Lvm.jpg",
  "https://photos.smugmug.com/photos/214654638_DXoDs/0/2100x20000/214654638_DXoDs-2100x20000.jpg",
  "https://photos.smugmug.com/photos/i-2RHxWjC/2/O/i-2RHxWjC.jpg"
]

WONDERMARK = [
  "http://wondermark.com/c/2016-09-20-1254work.png",
  "http://wondermark.com/c/2016-09-13-1252war.png",
  "http://wondermark.com/c/2016-09-16-1253war2.png",
  "http://wondermark.com/c/2016-09-09-1251cert.png",
  "http://wondermark.com/c/2016-09-06-1250cat.png",
  "http://wondermark.com/c/2016-09-02-1249paper.png",
  "http://wondermark.com/c/2016-08-30-1248pie.png",
  "http://wondermark.com/c/2016-08-23-1247notes.png",
  "http://wondermark.com/c/2016-08-19-1246crisis.png",
  "http://wondermark.com/c/2016-08-16-1245school.png",
  "http://wondermark.com/c/2016-08-11-1244face.png",
  "http://wondermark.com/c/2016-08-05-1243close.png"
]

REDTAIL = [
  "http://www.minnasundberg.fi/comic/chapter0/eng00.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng01.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng02.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng03.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng04.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng05.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng06.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng07.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng08.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng09.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng10.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng11.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng12.jpg",
  "http://www.minnasundberg.fi/comic/chapter0/eng13.jpg"
]

DIGGER = [
  "http://diggercomic.com/comics/2007-02-01-wombat1-gnorf.gif",
  "http://diggercomic.com/comics/2007-02-02-wombat2-purrrple.gif",
  "http://diggercomic.com/comics/2007-02-03-wombat3-funkay.gif",
  "http://diggercomic.com/comics/2007-02-04-wombat4-magenta.gif",
  "http://diggercomic.com/comics/2007-02-05-wombat5-cyan.gif",
  "http://diggercomic.com/comics/2007-02-06-wombat6-fnord45.gif",
  "http://diggercomic.com/comics/2007-02-07-wombat7-blargh23.gif",
  "http://diggercomic.com/comics/2007-02-08-wombat8-snorkus.gif",
  "http://diggercomic.com/comics/2007-02-09-wombat9-ummagumma.gif",
  "http://diggercomic.com/comics/2007-02-10-wombat10-buzzard.gif",
  "http://diggercomic.com/comics/2007-02-11-wombat11-rutabega.gif",
  "http://diggercomic.com/comics/2007-02-12-wombat12-blather.gif",
  "http://diggercomic.com/comics/2007-02-13-wombat13-boojum.gif",
  "http://diggercomic.com/comics/2007-02-14-wombat14-snark.gif",
  "http://diggercomic.com/comics/2007-02-15-wombat15-grumpus.gif",
  "http://diggercomic.com/comics/2007-02-16-wombat16-grizzly.gif",
  "http://diggercomic.com/comics/2007-02-17-wombat17-ripple.gif",
  "http://diggercomic.com/comics/2007-02-18-wombat18-crud.gif",
  "http://diggercomic.com/comics/2007-02-19-wombat19-rainy.gif",
  "http://diggercomic.com/comics/2007-02-20-wombat20-scribbly.gif"
]

LACKADAISY = [
  "http://www.lackadaisycats.com/comic/1208399203.jpg",
  "http://www.lackadaisycats.com/comic/1155479965.jpg",
  "http://www.lackadaisycats.com/comic/1155480017.jpg",
  "http://www.lackadaisycats.com/comic/1208399281.jpg",
  "http://www.lackadaisycats.com/comic/1213840456.jpg",
  "http://www.lackadaisycats.com/comic/1155480329.jpg",
  "http://www.lackadaisycats.com/comic/1213770963.jpg",
  "http://www.lackadaisycats.com/comic/1213771173.jpg",
  "http://www.lackadaisycats.com/comic/1213771111.jpg",
  "http://www.lackadaisycats.com/comic/1213771281.jpg",
  "http://www.lackadaisycats.com/comic/1157358593.jpg",
  "http://www.lackadaisycats.com/comic/1238468042.jpg",
  "http://www.lackadaisycats.com/comic/1159187819.jpg",
  "http://www.lackadaisycats.com/comic/1222025278.jpg",
  "http://www.lackadaisycats.com/comic/1160369419.jpg",
  "http://www.lackadaisycats.com/comic/1160286510.jpg",
  "http://www.lackadaisycats.com/comic/1213771418.jpg",
  "http://www.lackadaisycats.com/comic/1213855098.jpg",
  "http://www.lackadaisycats.com/comic/1213771589.jpg"
]

BLINDSPRINGS = [
  "http://www.blindsprings.com/comics/cover.jpg",
  "http://www.blindsprings.com/comics/1430199037-TB_01_001.jpg",
  "http://www.blindsprings.com/comics/1430198957-TB_01_002.jpg",
  "http://www.blindsprings.com/comics/1430198917-TB_01_003.jpg",
  "http://www.blindsprings.com/comics/TB_01_0042.jpg",
  "http://www.blindsprings.com/comics/1430198860-TB_01_005.jpg",
  "http://www.blindsprings.com/comics/TB_01_006.jpg",
  "http://www.blindsprings.com/comics/TB_01_007.jpg",
  "http://www.blindsprings.com/comics/TB_01_008.jpg",
  "http://www.blindsprings.com/comics/TB_01_009_b.jpg",
  "http://www.blindsprings.com/comics/1430198694-TB_01_009.png",
  "http://www.blindsprings.com/comics/TB_01_011.jpg",
  "http://www.blindsprings.com/comics/TB_01_012.jpg",
  "http://www.blindsprings.com/comics/TB_01_0131.jpg",
  "http://www.blindsprings.com/comics/TB_01_014.jpg",
  "http://www.blindsprings.com/comics/TB_01_015.jpg",
  "http://www.blindsprings.com/comics/TB_01_016.jpg",
  "http://www.blindsprings.com/comics/TB_01_017.jpg",
  "http://www.blindsprings.com/comics/TB_01_018.jpg",
  "http://www.blindsprings.com/comics/TB_01_019.jpg"
]

UNSOUNDED = [
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_01.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_02.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_03.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_04.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_05.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_06.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_07.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_08.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_09.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_10.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_11.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_12.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_13.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_14.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_15.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_16.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_17.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_18.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_19.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_20.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_21.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_22.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_23.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_24.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_25.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_26.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_27.jpg",
  "http://www.casualvillain.com/Unsounded/comic/ch01/pageart/ch01_28.jpg"
]

# gg
# starlsip
# penny Arcade
# avas demon

ALL = [
  GIRL_GENIUS,
  STARSLIP,
  PENNY_ARCADE,
  WONDERMARK,
  REDTAIL,
  DIGGER,
  LACKADAISY,
  BLINDSPRINGS,
  UNSOUNDED
]

ALL.each_with_index do |comic, i|
  comic.each_with_index do |url, j|
    cloudinary_url = Cloudinary::Uploader.upload(url)["url"]
    Page.create({
      comic_id: (i + 11),
      page_number: (j + 1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
    })
  end
end


# CONFIRMED -----------------------------------

url = "http://www.bob-artist.com/demon/img/comic/"
202.times do |i|
  current_url = url + (i+1).to_s + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
    comic_id: 1,
    page_number: (i+1),
    image_url: cloudinary_url,
    thumb_url: cloudinary_url
    })
  end

url = "http://www.sssscomic.com/comicpages/"
141.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 2,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.gunnerkrigg.com/comics/"
95.times do |i|
  current_url = url + (i+1).to_s.rjust(8, "0") + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 3,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.spindrift-comic.com/static/pages/chapter0/"
11.times do |i|
  current_url = url + i.to_s.rjust(2, "0") + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 4,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.spindrift-comic.com/static/pages/chapter1/"
76.times do |i|
  current_url = url + i.to_s.rjust(2, "0") + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 4,
      page_number: (i+11),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.spindrift-comic.com/static/pages/chapter2/"
25.times do |i|
  current_url = url + (i + 76).to_s.rjust(2, "0") + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 4,
      page_number: (i+86),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://zules.com/exvulnerum/pages/"
242.times do |i|
  current_url = url + (i + 1).to_s + ".jpg"
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 5,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end

url = "http://www.sombulus.com/comic/image/"
17.times do |i|
  current_url = url + (i + 1).to_s
  cloudinary_url = Cloudinary::Uploader.upload(current_url)["url"]
  Page.create({
      comic_id: 6,
      page_number: (i+1),
      image_url: cloudinary_url,
      thumb_url: cloudinary_url
  })
end
