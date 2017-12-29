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
	$scope.toggleLeft = function() {
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
	
	
	
	
})

//首次进入轮播图
.controller('LunbotuCtrl',function ($scope, loadLunbo) {
	$scope.toIndex = function () {
		loadLunbo.set('isLoad', 'isLoad');
		window.location.href = '#/tab/home';
	}
})



.controller('lessonlistCtrl', function($scope, courseList) {
	//课程列表 数据
	$scope.newPage = 1;
	$scope.lists = courseList.loadData( $scope.newPage );
//	上拉加载数据
	$scope.moredata = true; //允许上拉加载数据
	$scope.loadMore = function () {
		$scope.newPage++;
		var newList = courseList.loadData( $scope.newPage );
		$scope.lists = $scope.lists.concat( newList );
		console.log(newList);
		$scope.$broadcast('scroll.infiniteScrollComplete');
		if (newList.length == 0) {  //当没有数据时，停止数据
			$scope.moredata = false;
			
		}
	}
	
//选择课程
	$scope.courseChoose = function () {
		
		$scope.lists = courseList.courseChoose();
	}
//选择价格
	$scope.priceChoose = function () {
		$scope.lists = courseList.priceChoose();
	}
	
	//点击切换
	$scope.lslist = false;
	$scope.prlist = false;
	$scope.lcolor = {'color':'#333'};
	$scope.pcolor = {'color':'#333'};
	$scope.course = function () {
		$scope.lslist = !$scope.lslist;
		if ($scope.lslist) {
			
			$scope.prlist = false;
			$scope.lcolor = {'color': '#00f'};
			$scope.pcolor = {'color': '#333'};
		}
	}
	$scope.price = function () {
		$scope.prlist = !$scope.prlist;
		if ($scope.prlist) {
			$scope.lslist = false;
			$scope.pcolor = {'color': '#00f'};
			$scope.lcolor = {'color': '#333'};
		}
		
	}
	
//	点击切换列表数据
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

.controller('mycourseCtrl', function($scope) {

})

.controller('personalCtrl', function($scope) {
 
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
