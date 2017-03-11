//socialReport.js

//It need jQuery.
//It has three subclassess: Data, vVew and Operation

//View class deal with UI 
//Operatioin class contain a pile of functions which help to calculate the date from the data class before render by view class

;(function($, window){
    window.SocialReport = function(){
        var SocialReport = {};
        
        //SocialReport.Data
        //----------------
        
        //Data class is designed to get the facebook and google data by ajax.
        var Data = SocialReport.Data = {};
        
        //url for get data from server
        Data.url = '';
        
        //wrap ajax
        Data.ajax = function(data, options){
            $.ajax({
                url: options.url || Data.url,
                type: options.type || 'GET',
                data: data,
                dataType: options.datatype || 'json',
                success: options.success || '',
                error: options.error || ''
            });
        };
        
        //get data from server by ajax.
        Data.get = function(data, options){
            Data.ajax(data, options || '');
        };
        
        //post data to server by ajax.
        Data.post = function(data, options){
            Data.ajax(data, options || '');
        }
        
        //View class
        var View = SocialReport.View = {};
        
        //Operation class
        var Operation = SocialReport.Operation = {};
        
        
        
        return SocialReport;
    }();
    
    
})($, window);