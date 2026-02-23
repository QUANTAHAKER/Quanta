/**
 * Configuración global: webhooks, precios y factores de cotización
 */
const CONFIG = {
  WEBHOOK_URL: 'https://hook.us2.make.com/t13pwfqkes7brwbac19stmloeys2x421',
  MAKE_WEBHOOK_URL: 'https://hook.us2.make.com/t13pwfqkes7brwbac19stmloeys2x421',
  CONTACT_WEBHOOK_URL: 'https://hook.us2.make.com/oxe9w5t2u5pkgfn7oe0a71umt71ngfnh?Key=Content-Type&Value=application/json',

  PRICES: {
    basePrice: 3254,
    industryFactors: {
      'muebles-madera': 1.00, 'papel-carton': 1.00, 'construccion': 1.00,
      'plasticos': 1.10, 'textiles': 1.10, 'alimentos': 1.10, 'cosmeticos': 1.10,
      'metalmecanica': 1.15, 'maquinaria': 1.15, 'vehiculos': 1.15, 'electrodomesticos': 1.15,
      'quimicos': 1.20, 'otro': 1.20
    },
    companySizeFactors: { '50-90': 0.90, '91-150': 1.00, '151-300': 1.10, '301-500': 1.20, '500+': 1.50 },
    productionStaffFactors: { '0-20': 0.95, '21-50': 1.00, '51-100': 1.10, '100+': 1.20 }
  },

  industryLabels: {
    'muebles-madera': 'Muebles y madera', 'papel-carton': 'Papel, cartón e impresión',
    'construccion': 'Construcción industrializada', 'plasticos': 'Plásticos y derivados',
    'textiles': 'Textiles y confecciones', 'alimentos': 'Alimentos y bebidas',
    'cosmeticos': 'Cosméticos y cuidado personal', 'metalmecanica': 'Metalmecánica',
    'maquinaria': 'Maquinaria y equipos', 'vehiculos': 'Vehículos y autopartes',
    'electrodomesticos': 'Electrodomésticos y electrónica', 'quimicos': 'Químicos y farmacéuticos',
    'otro': 'Otro / no clasificado'
  }
};

export default CONFIG;
