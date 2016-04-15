'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentList
 * @description
 * # commentList
 */
angular.module('commentList', ['comment','angularMoment'])
  .directive('commentList', function () {
    return {
      template: '<div class="commentList">' +
                  '<comment-model ng-repeat="comment in comments" author="{{comment.author}}">' +
                    '{{comment.msg}}' +
		    '</br>{{comment.creationTime | changeLastTime}} ago' +
                  '</comment-model>' +
                  '<span ng-if="comments.length < 1">No comments yet</span>' +
                '</div>',
      restrict: 'E',
      scope: {
        comments: '='
      },
      link: function postLink(scope, element, attrs) {}
    };
  }).filter('changeLastTime',[function(){
		return function(date){	
			 var seconds = Math.floor((new Date().getTime()) / 1000);
			seconds -= date;


    var interval = Math.floor(seconds / 31536000);



    if (interval > 1) {

        return interval + " years";

    }

    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {

        return interval + " months";

    }

    interval = Math.floor(seconds / 86400);

    if (interval > 1) {

        return interval + " days";

    }

    interval = Math.floor(seconds / 3600);

    if (interval > 1) {

        return interval + " hours";

    }

    interval = Math.floor(seconds / 60);

    if (interval > 1) {

        return interval + " minutes";

    }

    return Math.floor(seconds) + " seconds";
		}
	}]);
