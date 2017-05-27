import Vue from 'vue'
import Router from 'vue-router';
import main from 'components/main/main';
import citySelect from 'components/citySelect/citySelect';
import service from 'components/service/service';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: main
        },
        {
            path: '/main',
            component: main
        },
        {
            path: '/main/:city_no/:city_name',
            name:'backCity',
            component: main
        },
        {
            path: '/city/:city_no/:city_name',
            name:'city',
            component: citySelect
        },
        {
            path: '/service',
            component: service
        },
        {
            path: '/service',
            component: service
        }
    ]
});

