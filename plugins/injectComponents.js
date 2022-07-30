import Vue from 'vue';

import BaseHeader from '~/components/ui/BaseHeader';
import BaseFooter from '~/components/ui/BaseFooter';
import BaseGmap from '~/components/ui/BaseGmap';
import VacancyForm from '~/components/ui/forms/vacancy';
import BaseBtn from "~/components/ui/BaseBtn";
import BaseCard from "~/components/ui/BaseCard";
import EmptyData from "@/components/ui/EmptyData";

Vue.component('BaseHeader', BaseHeader);
Vue.component('BaseFooter', BaseFooter);
Vue.component('BaseGmap', BaseGmap);
Vue.component('VacancyForm', VacancyForm);
Vue.component('BaseBtn', BaseBtn);
Vue.component('BaseCard', BaseCard);
Vue.component('EmptyData', EmptyData);
