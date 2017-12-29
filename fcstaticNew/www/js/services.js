angular.module('starter.services', [])


.factory('homeGoodList',function () {
	//好评榜数据
	var homeGoodlistRows = [
        [{
            "id":0, "title":"javascript课程", "main":"good,good,非常棒！","imgsrc":"shouye_02.png"
        },{
            "id":1, "title":"UI/UE", "main":"UI,UI!","imgsrc":"shouye_02.png"
        }]
        ,[{
            "id":2, "title":"HTML5+CSS3", "main":"棒棒哒","imgsrc":"shouye_02.png"
        },{
            "id":3, "title":"jQuery", "main":"write less,do more!","imgsrc":"shouye_02.png"
        }]
    ];
    
    return {
    	all: function () {
    		return homeGoodlistRows;
    	}
    }
    
})
.factory('homeNewList',function () {
    
    //最新课程数据
	var homeNewlistRows = [
        [{
            "id":0, "title":"javascript课程", "main":"good,good,非常棒！","imgsrc":"shouye_03.png"
        },{
            "id":1, "title":"UI/UE", "main":"UI,UI!","imgsrc":"shouye_03.png"
        }]
        ,[{
            "id":2, "title":"HTML5+CSS3", "main":"棒棒哒","imgsrc":"shouye_03.png"
        },{
            "id":3, "title":"jQuery", "main":"write less,do more!","imgsrc":"shouye_03.png"
        }]
    ];
    
    return {
    	all: function () {
    		return homeNewlistRows;
    	}
    }
})
.factory('homeLikeList',function () {
    
    //猜你喜欢数据
	var homeLikelist = [
        {
            "id":0, "title":"javascript课程", "main":"good,good,非常棒！","imgsrc":"shouye_02.png"
        },{
            "id":1, "title":"UI/UE", "main":"UI,UI!","imgsrc":"shouye_03.png"
        },{
            "id":2, "title":"HTML5+CSS3", "main":"棒棒哒","imgsrc":"shouye_02.png"
        },{
            "id":3, "title":"jQuery", "main":"write less,do more!","imgsrc":"shouye_03.png"
        }
    ];
    
    return {
    	all: function () {
    		return homeLikelist;
    	}
    }
})

//首次进入页面APP轮播数据 调用浏览器的本地数据存储
.factory('loadLunbo',['$window', function ($window) {
	return {
		set: function (key, value) {
			$window.localStorage[key] = value;
		},
		get: function (key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		}
	}
}])


.factory('courseList', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '1Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 1,
    name: '2Max Lynx',
    price: 'Hey, it\'s me',
    imgsrc: 'img/max.png'
  }, {
    id: 2,
    name: '3Adam Bradleyson',
    price: 'I should buy a boat',
    imgsrc: 'img/adam.jpg'
  }, {
    id: 3,
    name: '4Perry Governor',
    price: 'Look at my mukluks!',
    imgsrc: 'img/perry.png'
  }, {
    id: 4,
    name: '5Mike Harrington',
    price: 'This is wicked good ice cream.',
    imgsrc: 'img/mike.png'
  },{
    id: 5,
    name: '6Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 6,
    name: '7Max Lynx',
    price: 'Hey, it\'s me',
    imgsrc: 'img/max.png'
  }, {
    id: 7,
    name: '8Adam Bradleyson',
    price: 'I should buy a boat',
    imgsrc: 'img/adam.jpg'
  }, {
    id: 8,
    name: '9Perry Governor',
    price: 'Look at my mukluks!',
    imgsrc: 'img/perry.png'
  }, {
    id: 9,
    name: '10Mike Harrington',
    price: 'This is wicked good ice cream.',
    imgsrc: 'img/mike.png'
  },{
    id: 10,
    name: '11Ben Sparrow',
    price: 'You on your way?',
    imgsrc: 'img/ben.png'
  }, {
    id: 11,
    name: '12Max Lynx',
    price: 'Hey, it\'s me',
    imgsrc: 'img/max.png'
  }, {
    id: 12,
    name: '13Adam Bradleyson',
    price: 'I should buy a boat',
    imgsrc: 'img/adam.jpg'
  }, {
    id: 13,
    name: '14Perry Governor',
    price: 'Look at my mukluks!',
    imgsrc: 'img/perry.png'
  }, {
    id: 14,
    name: '15Mike Harrington',
    price: 'This is wicked good ice cream.',
    imgsrc: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    loadData: function (num) {
    	return chats.slice((num-1)*5,num*5);
    },
    courseChoose: function (courseId) {
    	return chats.slice(0,4);
    },
    priceChoose: function (courseId) {
    	return chats.slice(2,4);
    }
  };
  
});
