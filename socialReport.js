//socialReport.js

//It has three subclassess: data, view and operation

//data class is designed to get the facebook and google data by ajax.
//view class deal with UI 
//operatioin class contain a pile of functions which help to calculate the date from the data class before render by view class

;(function(window){
    window.socialReport = function(){
        var socialReport = {};
        
        //data class
        var data = socialReport.data = {};
        
        //view class
        var view = socialReport.view = {};
        
        //operation class
        var operation = socialReport.operation = {};
        
        
        
        return socialReport;
    }();
    
    
})(window);