import Vue from 'vue';

import BaseHeader from '~/components/ui/BaseHeader';
import BaseFooter from '~/components/ui/BaseFooter';
import BaseGmap from '~/components/ui/BaseGmap';
import VacancyForm from '~/components/ui/forms/vacancy';
import BaseBtn from "~/components/ui/BaseBtn";
import BaseCard from "~/components/ui/BaseCard";

Vue.component('Header', BaseHeader);
Vue.component('Footer', BaseFooter);
Vue.component('Gmap', BaseGmap);
Vue.component('VacancyForm', VacancyForm);
Vue.component('BaseBtn', BaseBtn);
Vue.component('BaseCard', BaseCard);
