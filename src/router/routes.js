import HomePage from '@/pages/homepage/HomePage'
import CompanyPage from '@/pages/companypage/CompanyPage'
import ProductPage from '@/pages/productpage/ProductPage'
import AlliancePage from '@/pages/alliancepage/AlliancePage'
import AboutPage from '@/pages/aboutpage/AboutPage'

const routes = [
  {
    path: '/website',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'This is Home page'
    }
  },
  {
    path: '/website/company',
    name: 'Company',
    component: CompanyPage,
    meta: {
      title: 'This is Company page'
    }
  },
  {
    path: '/website/product',
    name: 'Product',
    component: ProductPage,
    meta: {
      title: 'This is Product page'
    }
  },
  {
    path: '/website/alliance',
    name: 'Alliance',
    component: AlliancePage,
    meta: {
      title: 'This is Alliance page'
    }
  },
  {
    path: '/website/about',
    name: 'AboutUs',
    component: AboutPage,
    meta: {
      title: 'This is AboutUs page'
    }
  }
]

export default routes
