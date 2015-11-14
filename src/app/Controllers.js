import {app} from './app.js';

class SampleController{
    // @ngInject
    constructor($scope){
        $scope.msg = "Welcome" ;
        this.msg = "Welcome2" ;
    }

}

app.controller('SampleController',SampleController);

