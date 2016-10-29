FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/myBooks', {
    name: 'myBooks',
    action() {
        BlazeLayout.render('mainLayout', {main: 'myBooks'});
    }
});


FlowRouter.route('/borrowing',{
    name: 'borrowing',
    action() {
        BlazeLayout.render('mainLayout');
    }
});

FlowRouter.route('/wishList',{
    name: 'wishList',
    action() {
        BlazeLayout.render('mainLayout');
    }
});

FlowRouter.route('/lentOut',{
    name: 'lentOut',
    action() {
        BlazeLayout.render('mainLayout');
    }
});