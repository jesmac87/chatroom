var app = angular.module('chatroom');

app.service('parseService', function($http, $q) {
    //Here you'll need to create two methods. One called postData and the other called getData.

    //On the lines below create a getData method. This method will retrieve data from the parse backend.
    //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
    //Be sure to return whatever gets returned from $http so you can call .then in your controller.


    //On the line below create the postData method. This method will add data to the parse backend.
    //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
    //Because we're making a POST request, we need a way to tell parse the data we want to give it, 
    //in your $http call (along with url and method) have a data property which has a value that is equal to another 
    //object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage} 
    //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you 
    //can then use .then in your controller.

    //postData method here
    this.postData = function(message) {
        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/chat',
            data: {
                text: message
            }
        }).then(function() {
            deferred.resolve(response);
        }, function(err) {
            deferred.reject(err);
        });
    };

    //getData method here
    this.getData = function() {

        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
        }).then(function(response) {
            deferred.resolve(response.data.results);
        }, function(err) {
            deferred.reject(err);
        });

        return deferred.promise;
    };
});
