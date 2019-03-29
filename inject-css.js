<!-- This snippet binds a function to the "dom:loaded" event.
You can put your own javascript into the function, or replace
the entire snippet. -->
<script type="text/javascript">
   document.body.addEventListener('transitionend', function(){
       // console.log('done');
       }, false);
    var courses_list = [
        '_16708_1',
        '_14723_1',
        '_17274_1',
        '_3045_1',
        '_17738_1',
        '_10051_1'
    ];
    var h_full = window.location.host
    //console.log(full);
    //window.location.host is subdomain.domain.com
    var h_parts = h_full.split('.')
    var h_sub = h_parts[0]
    var h_domain = h_parts[1]
    var h_type = h_parts[2]
    
    var h_url_string = window.location
    var h_url = new URL(h_url_string);
    var h_course_id = h_url.searchParams.get("course_id");
    //console.log(course_id);
    // if(h_course_id== '_16708_1' || h_course_id == '_14723_1' || h_course_id == '_17274_1' || h_course_id == '_3045_1' || h_course_id == '_17738_1' || h_course_id == '_10051_1')
    if(courses_list.indexOf(h_course_id)!= -1)    
    {
        jQuery('head').append('<link rel="stylesheet" href="https://ressourcesfactory.github.io/bb-charte-cours-modele/refactory.css" type="text/css" />');
    }
</script>
