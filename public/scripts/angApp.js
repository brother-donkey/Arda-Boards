(function(){var App = angular.module("ardaApp", []);

    var mock = {
          "author": "Will",
          "text": "hello, world!"
        };
        
    var list = [{
            "_id" : "58efe20c59d29140e01a21af",
            "author" : "Peter",
            "comments" : [
                    {
                            "text" : "Yeah, we know, man.",
                            "_id" : "58efe3d259d29140e01a21b1",
                            "votes" : 6,
                            "author" : "Huy",
                    },
                    {
                            "text" : "I live PB and H",
                            "_id" : "58efe39359d29140e01a21b0",
                            "votes" : 8,
                            "author" : "Will",
                    }
            ],
            "text" : "I love peanutbutter and honey sandwiches!",
            "__v" : 30
        },
        {
            "_id" : "58efe20c59d29140e01a21af",
            "author" : "Peter",
            "comments" : [
                    {
                            "text" : "Yeah, we know, man.",
                            "_id" : "58efe3d259d29140e01a21b1",
                            "votes" : 6,
                            "author" : "Huy",
                    },
                    {
                            "text" : "I live PB and H",
                            "_id" : "58efe39359d29140e01a21b0",
                            "votes" : 8,
                            "author" : "Will",
                    }
            ],
            "text" : "I love peanutbutter and honey sandwiches!",
            "__v" : 30
        }]; //end mockTopic
        
    App.controller('TopicsController', function($scope, apiService){
        // $scope.list = list; 
        $scope.mock = mock;
        
        apiService.getTopics(function(response){
                console.log(response.data);
                $scope.list = response.data;
        }); 
    })//end app controller
    .service('apiService', function($http){
        this.helloworld = function(){
            console.log("hello, world!");
        };
        
        this.getTopics = function(callback){
            $http.get('https://fdy-brotherdonkey.c9users.io/topics/') //can dynamically insert topics?
            .then(callback);
        }
    }) // apiService end
        
        
        
    // });//controller end
    
        
        
        console.log("angular attached");

})(); //end closure
