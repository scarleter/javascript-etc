//SocialReport.js

//It is dependent on jQuery.
//It has three subclassess: Data, vVew and Operation

;(function($, window){
    window.SocialReport = function(){
        var SocialReport = {};
        
        //SocialReport.Data
        //-----------------
        
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
        };
        
        //update the whole data to server.
        Data.put = function(data, options){
            //use Data.post for now, do not figure out the best way to simulate RESTful api.
            Data.post(data, options);
        };
        
        //update the property of data to server.
        Data.patch = function(data, options){
            //use Data.post for now, do not figure out the best way to simulate RESTful api.
            Data.post(data, options);
        };
        
        //delete data from server by ajax simulate RESTful api.
        Data.delete = function(data, options){
            //use Data.post for now, do not figure out the best way to simulate RESTful api.
            Data.post(data, options);
        };
        
        
        //SocialReport.View
        //-----------------
        
        //View class deal with UI 
        var View = SocialReport.View = {};
        
        
        
        //SocialReport.Operation
        //----------------------
        
        //Operatioin class contain a pile of functions which help to calculate the date from the data class before render by view class
        var Operation = SocialReport.Operation = {};
        
        //get data size
        Operation.getSize = function(data){
            var d = data || {}, type = (typeof d).toLowerCase();
            type = type === 'object'? (Operation._isArray(d)? 'array' : 'object') : type;
            
            switch(type){
                case 'string': return d.length;break;
                case 'array': return d.length;break;
                case 'object': return Operation._getObjectSize(d);break;
                default: return 0;
            };
            
        };
        
        //internal function which is to get the Object size
        Operation._getObjectSize = function(Obj){
            var size = 0, obj = Obj || {} ;
            //Object.keys could not support under IE9
            if(!!Object.keys){
                size = Object.keys(obj).length;
            }else{
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        size++;
                    }
                }
            }
            return size; 
        };
        
        //check Object is Array
        Operation._isArray = function(Obj){
            var obj = Obj || {};
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
        
        return SocialReport;
    }();
    
    
})($, window);