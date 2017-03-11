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
        
        //get platform data from server by ajax.`type` can only be string or array.
        //it would return in json.`platform` would be facebook by default.
        Data.get = function(type, platform, options){
            //make sure `type` is string or array
            if(Object.prototype.toString.call( type ) !== '[object Array]' && typeof type !== 'string') return false;
            platform = platform || 'facebook';
            
            Data.ajax({'type': type, 'platform': platform}, options || '');
            
        };
        
        //normally not call this function because we cannot update the platform data.
        Data.post = function(type, platform, options){
            //make sure `type` is string or array
            if(Object.prototype.toString.call( type ) !== '[object Array]' && typeof type !== 'string') return false;
            platform = platform || 'facebook';
            
            Data.ajax({'type': type, 'platform': platform}, options || '');
        }
        
        //View class
        var View = SocialReport.View = {};
        
        //Operation class
        var Operation = SocialReport.Operation = {};
        
        
        
        return SocialReport;
    }();
    
    
})($, window);