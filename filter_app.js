angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var menu=[
        {id:'1',name:'CAPPUCCINO',discription:'A double shot of espresso with equal parts steamed milk and foam',price:55},
        {id:'2',name:'LATTE',discription:'a double shot of espresso with steamed milk and a small layer of foam',price:75},
        {id:'3',name:'AFFOGATO',discription:'a single serving of espresso, stained with milky foam',price:65},
        {id:'4',name:'SHORT MACCHIATO',discription:'a single shot of espresso served with one scoop of vanilla ice-cream',price:50},
        {id:'5',name:'AFFOGATO',discription:'a single shot of espresso served with one scoop of vanilla ice-cream',price:60}
        
    ];
    console.log(menu);
    $scope.menu=menu;
    $scope.rowlimit=4;
});