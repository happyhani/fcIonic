angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, homeGoodList, homeNewList, homeLikeList, $ionicSideMenuDelegate, loadLunbo) {
//如果是第一次安装app，就跳转到引导页轮播图
    if(!(loadLunbo.get("isLoad") == "isLoad")){
      window.location.href = "#/tab/lunbotu";
    }


//	好评榜数据
	$scope.homeGood = homeGoodList.all();
//最新课程数据	
	$scope.homeNew = homeNewList.all();
//猜你喜欢数据	
	$scope.homeLike = homeLikeList.all();
//侧边栏
	$scope.toggleLeftSideMenu = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	};
	
	
//轮播	
	$scope.slidePics=[{
		"id":0,
		"imgsrc":"slideimage01.png"
	},{
		"id":1,
		"imgsrc":"slideimage02.png"
	},{
		"id":2,
		"imgsrc":"slideimage03.png"
	}];
	
//	home页跳转至study页面
	$scope.toStudy = function (myId) {
		window.location = "#/tab/homeStudy/"+myId;
	}
	

	
})

//首次进入轮播图
.controller('LunbotuCtrl',function ($scope, loadLunbo) {
	$scope.toIndex = function () {
		loadLunbo.set('isLoad', 'isLoad');
		window.location.href = '#/tab/home';
	}
})

.controller('lessonlistCtrl', function($scope, courseLists) {
//列表数据
	$scope.newPage = 1
	$scope.lists = courseLists.page($scope.newPage);
//上拉加载 滚动 ion-infinite-scroll
	$scope.moredata = true;//允许向下查找数据
	$scope.loadMore = function () {
		$scope.newPage++;
		var newList = courseLists.page($scope.newPage);
		console.log(newList);
		$scope.lists = $scope.lists.concat(newList);
		$scope.$broadcast('scroll.infiniteScrollComplete');
		if (newList.length == 0) {
			$scope.moredata = false;
		}
	}
	
//点击课程li获取数据
	$scope.courseChoose = function (courseId) {
		$scope.lists = courseLists.courseSearch(courseId);
		$scope.lilist = false;
	}
//点击价格li获取数据
	$scope.priceChoose = function (courseId) {
		$scope.lists = courseLists.priceSearch(courseId);
		$scope.prlist = false;
	}	
	
//	点击切换
//	$scope.lilist = false;
//	$scope.lcolor={color:"#333"};
	$scope.courseList = function () {
		$scope.lilist = !$scope.lilist;
		if ($scope.lilist) {
			$scope.lcolor={color:"#63aafc"};
		}else {
			$scope.lcolor={color:"#333"};
		}
		$scope.prlist = false;
		$scope.pcolor={color:"#333"};
	}
	
	$scope.price = function () {
		$scope.prlist = !$scope.prlist;
		if ($scope.prlist) {
			$scope.pcolor={color:"#63aafc"};
		}else {
			$scope.pcolor={color:"#333"};
		}
		$scope.lilist = false;
		$scope.lcolor={color:"#333"};
	}
	
	$scope.courseListBtns = [
		{id:0, btnName:"全部"},
		{id:1, btnName:"UI"},
		{id:2, btnName:"JAVA"},
		{id:3, btnName:"ios"},
		{id:4, btnName:"Android"},
		{id:5, btnName:"其他"}
	];
	$scope.priceBtns = [
		{id:0, btnName:"全部"},
		{id:1, btnName:"免费"},
		{id:2, btnName:"收费"}
		
	];

})

.controller('mycourseCtrl', function($scope, courseFirst, courseSecond) {
	$scope.itemFir = courseFirst.all();
	$scope.itemSec = courseSecond.all();
	
//	我的课程 切换
	$scope.myColor = {color:'#63aafc'}
	$scope.scColor = {color:'#333'}
	$scope.mycou= true;
    $scope.mycol= false;
	$scope.myLesson = function () {
	  $scope.data.showDelete=false;
      $scope.mycou= true;
      $scope.mycol= false;
      $scope.myColor={color:"#63aafc"};
      $scope.scColor={color:"#333"};
	}
	
	$scope.myCollect = function () {
	  $scope.data.showDelete=false;
      $scope.mycou= false;
      $scope.mycol= true ;
      $scope.myColor={color:"#333"};
      $scope.scColor={color:"#63aafc"};
	}
	
	//先定义的显示隐藏删除按钮的数据
    $scope.data = {
      showDelete: false
    };
    $scope.doShare = function (item) {
    	alert('Share Item:'+ item.id);
    }
    $scope.onItemDelete= function (item) {
    	$scope.items.splice( $scope.items.indexOf(item), 1 );
    }
})

.controller('personalCtrl', function($scope) {
 	//输入框数据
    $scope.loginUser={
      name:'',
      password:''
    };
    //登录方法
    $scope.doLogin=function(){
      //如果用户名和密码均输入，则执行登录
	  if(!!$scope.loginUser.name && !!$scope.loginUser.password){
	     window.location="#/tab/information";
	  }
    }
})

//注册
  .controller('registerCtrl', function($scope, $ionicPopup) {
		$scope.infor = {
			name:'',
			email:'',
			phone:'',
			password:'',
			passwordTwo:''
		}
		
		$scope.register = function (infor) {
			if (infor.name && infor.email&& infor.phone&& infor.password &&infor.passwordTwo) {
				var emailReg  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  				var photoReg = /^1\d{10}$/;
				if (!emailReg.test(infor.email)) {
					$ionicPopup.alert({
						title:'提示信息！',
						template:'邮箱格式不符合，请重新输入'
					});
				}else if (!photoReg.test(infor.phone)) {
					$ionicPopup.alert({
						title:'提示信息！',
						template:'手机号格式不符合，请重新输入'
					});
				}else if ( infor.password != infor.passwordTwo) {
					$ionicPopup.alert({
						title:'提示信息！',
						template:'两次输入密码不一致，请重新输入'
					});
				}else {
					window.location = '#/tab/personal'
				}
				
			}else {
				$ionicPopup.alert({
					title:'提示信息！',
					template:'请输入内容'
				});
			}
		}

  })
  
  //个人中心账号信息页 
.controller('informationCtrl', function($scope, $http) {
   	
   	$http.get('JSON/JSON.txt').
   		success(function (response) {
   			$scope.userName = response.records[0].name;
   			$scope.email = response.records[0].email;
   			$scope.phone = response.records[0].phone;
   			
   		});
   		
   	$scope.quitLogin = function () {
   		window.location = "#/tab/personal";
   	}
})

//home页至study页面
.controller('studyCtrl', function($scope, studyList, pingjiaList, $ionicModal) {
//	评价弹窗
	$ionicModal.fromTemplateUrl('templates/modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
   	$scope.studyMulu = studyList.all(); //目录列表
   	$scope.studyXiangq = pingjiaList.all(); //详情列表
   	
   	$scope.muluList = true;
   	$scope.xiangqList = false;
   	$scope.mulucolor = {color:'#00f'};
   	$scope.xqcolor = {color:'#333'};
   	
   	$scope.mulu =function () {
   		$scope.muluList = true;
   		$scope.mulucolor = {color:'#00f'};
   		$scope.xiangqList = false;
   		$scope.xqcolor = {color:'#333'};
   	}
   	
   	$scope.xiangq =function () {
   		$scope.muluList = false;
   		$scope.mulucolor = {color:'#333'};
   		$scope.xiangqList = true;
   		$scope.xqcolor = {color:'#00f'};
   	}
   
})

//评价弹窗 关闭方法
.controller('TaskCtrl',function ($scope) {
	$scope.close = function () {
		$scope.modal.hide();
	}
	$scope.createContact = function () {
		
		
	}
})


 /*底部tabs隐藏显示的指令*/
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  });
