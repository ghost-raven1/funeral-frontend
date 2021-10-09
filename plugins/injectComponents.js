import Vue from 'vue';

import BaseHeader from '~/components/ui/BaseHeader';
import BaseFooter from '~/components/ui/BaseFooter';
import BaseGmap from '~/components/ui/BaseGmap';
import VacancyForm from '~/components/ui/forms/vacancy';

Vue.component('Header', BaseHeader);
Vue.component('Footer', BaseFooter);
Vue.component('Gmap', BaseGmap);
Vue.component('VacancyForm', VacancyForm);
