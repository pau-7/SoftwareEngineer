var Webflow = Webflow || [];
let data={
  group: '',
  experience:'',
  sales:'',
  finance:'',
  product:'',
  internal:'',
  marketing:'',
  analytics:'',
  country:'',
  level:''
}

// Definir una función para establecer los valores predeterminados de los selectores al cargar la página
const setDefaultValues = () => {
  // Establecer los valores predeterminados para cada selector
  data.group = 'Development & Engineering';
  data.experience = 'QA Engineer';
  data.country = 'All Latam';
  data.level = 'Mid Level';

  // Obtener referencias a los selectores
  const groupSelect = document.getElementById('group-select');
  const experienceSelect = document.getElementById('Development-Engineering');
  const countrySelect = document.getElementById('group-country');
  const levelSelect = document.getElementById('select-level');

  // Establecer los valores predeterminados en los selectores
  groupSelect.value = data.group;
  experienceSelect.value = data.experience;
  countrySelect.value = data.country;
  levelSelect.value = data.level;

  // Llamar a la función select() para actualizar la interfaz según los valores predeterminados
  select();
};

// Llamar a la función setDefaultValues al cargar la página
window.addEventListener('load', setDefaultValues);

const select = ()=>{
  const developmentEngineering = document.getElementById('Development-Engineering');
  const salesBusinessDev = document.getElementById('Sales-Business-Dev');
  const financeAccounting = document.getElementById('Finance-Accounting');
  const productDevDesign = document.getElementById('Product-Dev-Design');
  const hrInternalOps = document.getElementById('HR-Internal-Ops');
  const marketingBranding = document.getElementById('Marketing-Branding');
  const dataAnalytics = document.getElementById('Data-Analytics');
  const chooseCountry = document.getElementById('group-country');
  const chooseTheExperience = document.getElementById('select-level');
  const estimateCost = document.getElementById('submit');

if (data.group !=='') {
    chooseCountry.style.display = 'none';
    chooseTheExperience.style.display = 'none';
    estimateCost.style.display = 'none';
   if(data.experience !=='' || data.sales !=='' || data.finance !=='' || data.product !=='' || data.internal !=='' || data.marketing !=='' || data.analytics !==''){
   	chooseCountry.style.display = 'flex';
    chooseTheExperience.style.display = 'none';
    estimateCost.style.display = 'none';
          if (data.country !== "") {
            chooseCountry.style.display = 'flex';
            chooseTheExperience.style.display = 'flex';
            estimateCost.style.display = 'none';
                if (data.level !== "") {
                chooseCountry.style.display = 'flex';
                chooseTheExperience.style.display = 'flex';
                estimateCost.style.display = 'flex';
            }
        }
    }
 }
 
  if(data.group === 'Development & Engineering'){
  developmentEngineering.style.display='flex'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
  }else if(data.group === 'Sales & Business Dev'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='flex'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
  }else if(data.group === 'Finance & Accounting'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='flex'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
 } else if(data.group === 'Product Dev & Design'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='flex'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
  } else if(data.group === 'HR & Internal Ops'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='flex'
  marketingBranding.style.display='none'
  dataAnalytics.style.display='none'
 } else if(data.group === 'Marketing & Branding'){
  developmentEngineering.style.display='none'
  salesBusinessDev.style.display='none'
  financeAccounting.style.display='none'
  productDevDesign.style.display='none'
  hrInternalOps.style.display='none'
  marketingBranding.style.display='flex'
  dataAnalytics.style.display='none'
  }else if(data.group === 'Data & Analytics'){
  developmentEngineering.style.display = 'none';
  salesBusinessDev.style.display = 'none';
  financeAccounting.style.display = 'none';
  productDevDesign.style.display = 'none';
  hrInternalOps.style.display = 'none';
  marketingBranding.style.display = 'none';
  dataAnalytics.style.display = 'flex';
  }
}

 const setPrice = ()=>{
    const candidatesSalary = document.getElementById('Candidates-salary')
    const teilursFee = document.getElementById('teilurs-fee')
    const price = document.getElementById('price')
    const median = document.getElementById('median')
    const min = document.getElementById('min')
    const max = document.getElementById('max')
    const total = document.getElementById('total')
    const bar = document.getElementById('bar')
    
 if(data.group === 'Development & Engineering' && data.experience === 'Infrastructure Engineer' && data.level === 'Mid Level'){
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='2,960'
    teilursFee.textContent='740'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Infrastructure Engineer' && data.level === 'Senior Level'){
    price.textContent='6,250'
    total.textContent='6,250'
    median.textContent='6,250'
    min.textContent='5,000'
    max.textContent='7,500'
    candidatesSalary.textContent='5,000'
    teilursFee.textContent='1,250'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Infrastructure Engineer' && data.level === 'Manager/Director Level'){
    price.textContent='10,000'
    total.textContent='10,000'
    median.textContent='10,000'
    min.textContent='7,500'
    max.textContent='12,500'
    candidatesSalary.textContent='8,000'
    teilursFee.textContent='2,000'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Software Engineer' && data.level === 'Mid Level'){
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='3,750'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Software Engineer' && data.level === 'Senior Level') {
    price.textContent='8,125'
    total.textContent='8,125'
    median.textContent='8,125'
    min.textContent='6,250'
    max.textContent='8,750'
    candidatesSalary.textContent='6,500'
    teilursFee.textContent='1.625'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Software Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='9,375'
    total.textContent='9,375'
    median.textContent='9,375'
    min.textContent='8,750'
    max.textContent='12,500'
    candidatesSalary.textContent='7,500'
    teilursFee.textContent='1,875'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Front-End Developer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Front-End Developer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Front-End Developer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Back-End Developer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Back-End Developer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Back-End Developer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Cybersecurity' && data.level === 'Mid Level') {
    price.textContent='1,500'
    total.textContent='1,500'
    median.textContent='1,500'
    min.textContent='1,200'
    max.textContent='2,000'
    candidatesSalary.textContent='1,200'
    teilursFee.textContent='300'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Cybersecurity' && data.level === 'Senior Level') {
    price.textContent='2,300'
    total.textContent='2,300'
    median.textContent='2,300'
    min.textContent='1,500'
    max.textContent='3,000'
    candidatesSalary.textContent='1,840'
    teilursFee.textContent='460'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Cybersecurity' && data.level === 'Manager/Director Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='2,500'
    teilursFee.textContent='625'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Full-Stack Developer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Full-Stack Developer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Full-Stack Developer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
   }else if(data.group === 'Development & Engineering' && data.experience === 'DevOps Engineer' && data.level === 'Mid Level') {
    price.textContent='6,000'
    total.textContent='6,000'
    median.textContent='6,000'
    min.textContent='3,750'
    max.textContent='6,250'
    candidatesSalary.textContent='4,800'
    teilursFee.textContent='1,200'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'DevOps Engineer' && data.level === 'Senior Level') {
    price.textContent='8,000'
    total.textContent='8,000'
    median.textContent='8,000'
    min.textContent='6,250'
    max.textContent='8,750'
    candidatesSalary.textContent='6,400'
    teilursFee.textContent='1,600'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'DevOps Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='10,000'
    total.textContent='10,000'
    median.textContent='10,000'
    min.textContent='8,750'
    max.textContent='11,250'
    candidatesSalary.textContent='8,000'
    teilursFee.textContent='2,000'
    bar.style.width='50%' 
   }else if(data.group === 'Development & Engineering' && data.experience === 'System Administrator' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'System Administrator' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'System Administrator' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Database Administrator' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Database Administrator' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Database Administrator' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Network Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Network Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Network Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Security Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Security Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Security Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Cloud Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Cloud Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Cloud Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Data Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Data Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Data Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'QA Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'QA Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'QA Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Machine Learning Engineer' && data.level === 'Mid Level') {
    price.textContent='6,000'
    total.textContent='6,000'
    median.textContent='6,000'
    min.textContent='3,750'
    max.textContent='6,250'
    candidatesSalary.textContent='4,800'
    teilursFee.textContent='1,200'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Machine Learning Engineer' && data.level === 'Senior Level') {
    price.textContent='8,000'
    total.textContent='8,000'
    median.textContent='8,000'
    min.textContent='6,250'
    max.textContent='8,750'
    candidatesSalary.textContent='6,400'
    teilursFee.textContent='1,600'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Machine Learning Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='10,000'
    total.textContent='10,000'
    median.textContent='10,000'
    min.textContent='8,750'
    max.textContent='11,250'
    candidatesSalary.textContent='8,000'
    teilursFee.textContent='2,000'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Mobile App Developer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Mobile App Developer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Mobile App Developer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Site Reliability Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Site Reliability Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Site Reliability Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Systems/Solutions Architect' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Systems/Solutions Architect' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Systems/Solutions Architect' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Application Support Engineer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Application Support Engineer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Application Support Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Web Developer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Web Developer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Web Developer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'API Developer' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'API Developer' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'API Developer' && data.level === 'Manager/Director Level') {
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'IT Support Specialist' && data.level === 'Mid Level') {
    price.textContent='3,000'
    total.textContent='3,000'
    median.textContent='3,000'
    min.textContent='2,200'
    max.textContent='3,800'
    candidatesSalary.textContent='2,400'
    teilursFee.textContent='600'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'IT Support Specialist' && data.level === 'Senior Level') {
    price.textContent='4,650'
    total.textContent='4,650'
    median.textContent='4,650'
    min.textContent='3,800'
    max.textContent='5,500'
    candidatesSalary.textContent='3,720'
    teilursFee.textContent='930'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'IT Support Specialist' && data.level === 'Manager/Director Level') {
    price.textContent='6,500'
    total.textContent='6,500'
    median.textContent='6,500'
    min.textContent='5,500'
    max.textContent='7,500'
    candidatesSalary.textContent='5,200'
    teilursFee.textContent='1,300'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Scrum Master' && data.level === 'Mid Level') {
    price.textContent='4,375'
    total.textContent='4,375'
    median.textContent='4,375'
    min.textContent='3,125'
    max.textContent='5,625'
    candidatesSalary.textContent='3,500'
    teilursFee.textContent='875'
    bar.style.width='50%'
    }else if(data.group === 'Development & Engineering' && data.experience === 'Scrum Master' && data.level === 'Senior Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='5,625'
    max.textContent='7,750'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%' 
    }else if(data.group === 'Development & Engineering' && data.experience === 'Scrum Master' && data.level === 'Manager/Director Level'){
    price.textContent='8,750'
    total.textContent='8,750'
    median.textContent='8,750'
    min.textContent='7,500'
    max.textContent='10,000'
    candidatesSalary.textContent='7,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Sales Representative' && data.level === 'Mid Level') {
    price.textContent='1,500'
    total.textContent='1,500'
    median.textContent='1,500'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,200'
    teilursFee.textContent='300'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Sales Representative' && data.level === 'Senior Level') {
    price.textContent='2,250'
    total.textContent='2,250'
    median.textContent='2,250'
    min.textContent='1,875'
    max.textContent='2,500'
    candidatesSalary.textContent='1,800'
    teilursFee.textContent='450'
    bar.style.width='50%' 
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Sales Representative' && data.level === 'Manager/Director Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='3,750'
    candidatesSalary.textContent='2,500'
    teilursFee.textContent='625'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Business Developer' && data.level === 'Mid Level') {
    price.textContent='1,500'
    total.textContent='1,500'
    median.textContent='1,500'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,200'
    teilursFee.textContent='300'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Business Developer' && data.level === 'Senior Level') {
    price.textContent='2,250'
    total.textContent='2,250'
    median.textContent='2,250'
    min.textContent='1,875'
    max.textContent='2,500'
    candidatesSalary.textContent='1,800'
    teilursFee.textContent='450'
    bar.style.width='50%' 
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Business Developer' && data.level === 'Manager/Director Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='3,750'
    candidatesSalary.textContent='2,500'
    teilursFee.textContent='625'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Account Manager' && data.level === 'Mid Level') {
    price.textContent='1,500'
    total.textContent='1,500'
    median.textContent='1,500'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,200'
    teilursFee.textContent='300'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Account Manager' && data.level === 'Senior Level') {
    price.textContent='2,250'
    total.textContent='2,250'
    median.textContent='2,250'
    min.textContent='1,875'
    max.textContent='2,500'
    candidatesSalary.textContent='1,800'
    teilursFee.textContent='450'
    bar.style.width='50%' 
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Account Manager' && data.level === 'Manager/Director Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='3,750'
    candidatesSalary.textContent='2,500'
    teilursFee.textContent='625'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Customer Success' && data.level === 'Mid Level') {
    price.textContent='1,500'
    total.textContent='1,500'
    median.textContent='1,500'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,200'
    teilursFee.textContent='300'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Customer Success' && data.level === 'Senior Level') {
    price.textContent='2,250'
    total.textContent='2,250'
    median.textContent='2,250'
    min.textContent='1,875'
    max.textContent='2,500'
    candidatesSalary.textContent='1,800'
    teilursFee.textContent='450'
    bar.style.width='50%' 
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Customer Success' && data.level === 'Manager/Director Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='3,750'
    candidatesSalary.textContent='2,500'
    teilursFee.textContent='625'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Inside Sales Specialist' && data.level === 'Mid Level') {
    price.textContent='1,500'
    total.textContent='1,500'
    median.textContent='1,500'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,200'
    teilursFee.textContent='300'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Inside Sales Specialist' && data.level === 'Senior Level') {
    price.textContent='2,250'
    total.textContent='2,250'
    median.textContent='2,250'
    min.textContent='1,875'
    max.textContent='2,500'
    candidatesSalary.textContent='1,800'
    teilursFee.textContent='450'
    bar.style.width='50%' 
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Inside Sales Specialist' && data.level === 'Manager/Director Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='3,750'
    candidatesSalary.textContent='2,500'
    teilursFee.textContent='625'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Sales Engineer' && data.level === 'Mid Level') {
    price.textContent='1,875'
    total.textContent='1,875'
    median.textContent='1,875'
    min.textContent='1,125'
    max.textContent='2,250'
    candidatesSalary.textContent='1,500'
    teilursFee.textContent='375'
    bar.style.width='50%'
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Sales Engineer' && data.level === 'Senior Level') {
    price.textContent='2,250'
    total.textContent='2,250'
    median.textContent='2,250'
    min.textContent='2,000'
    max.textContent='2,750'
    candidatesSalary.textContent='1,800'
    teilursFee.textContent='450'
    bar.style.width='50%' 
    }else if(data.group === 'Sales & Business Dev' && data.sales === 'Sales Engineer' && data.level === 'Manager/Director Level') {
    price.textContent='3,375'
    total.textContent='3,375'
    median.textContent='3,375'
    min.textContent='2,750'
    max.textContent='4,000'
    candidatesSalary.textContent='2,700'
    teilursFee.textContent='675'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Accountant' && data.level === 'Mid Level') {
    price.textContent='1,875'
    total.textContent='1,875'
    median.textContent='1,875'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,500'
    teilursFee.textContent='375'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Accountant' && data.level === 'Senior Level') {
    price.textContent='2,750'
    total.textContent='2,750'
    median.textContent='2,750'
    min.textContent='2,500'
    max.textContent='3,500'
    candidatesSalary.textContent='2,200'
    teilursFee.textContent='510'
    bar.style.width='50%' 
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Accountant' && data.level === 'Manager/Director Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,500'
    max.textContent='4,375'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Accounts Payable/Receivable Specialist' && data.level === 'Mid Level') {
    price.textContent='1,875'
    total.textContent='1,875'
    median.textContent='1,875'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,500'
    teilursFee.textContent='375'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Accounts Payable/Receivable Specialist' && data.level === 'Senior Level') {
    price.textContent='2,750'
    total.textContent='2,750'
    median.textContent='2,750'
    min.textContent='2,500'
    max.textContent='3,500'
    candidatesSalary.textContent='2,200'
    teilursFee.textContent='510'
    bar.style.width='50%' 
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Accounts Payable/Receivable Specialist' && data.level === 'Manager/Director Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,500'
    max.textContent='4,375'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Bookkeeper' && data.level === 'Mid Level') {
    price.textContent='1,875'
    total.textContent='1,875'
    median.textContent='1,875'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,500'
    teilursFee.textContent='375'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Bookkeeper' && data.level === 'Senior Level') {
    price.textContent='2,750'
    total.textContent='2,750'
    median.textContent='2,750'
    min.textContent='2,500'
    max.textContent='3,500'
    candidatesSalary.textContent='2,200'
    teilursFee.textContent='510'
    bar.style.width='50%' 
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Bookkeeper' && data.level === 'Manager/Director Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,500'
    max.textContent='4,375'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Controller' && data.level === 'Mid Level') {
    price.textContent='1,875'
    total.textContent='1,875'
    median.textContent='1,875'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,500'
    teilursFee.textContent='375'
    bar.style.width='50%'
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Controller' && data.level === 'Senior Level') {
    price.textContent='2,750'
    total.textContent='2,750'
    median.textContent='2,750'
    min.textContent='2,500'
    max.textContent='3,500'
    candidatesSalary.textContent='2,200'
    teilursFee.textContent='510'
    bar.style.width='50%' 
    }else if(data.group === 'Finance & Accounting' && data.finance === 'Controller' && data.level === 'Manager/Director Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,500'
    max.textContent='4,375'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='1,750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Product Designer' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='3,750'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Product Designer' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'Product Dev & Design' && data.product === 'Product Designer' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'UI/UX Designer' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='3,750'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'UI/UX Designer' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'Product Dev & Design' && data.product === 'UI/UX Designer' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Graphic Designer' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='3,750'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Graphic Designer' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'Product Dev & Design' && data.product === 'Graphic Designer' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Product Analyst' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='3,750'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Product Analyst' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'Product Dev & Design' && data.product === 'Product Analyst' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'User Researcher' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='3,750'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'User Researcher' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'Product Dev & Design' && data.product === 'User Researcher' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Web Designer' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='3,750'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Product Dev & Design' && data.product === 'Web Designer' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'Product Dev & Design' && data.product === 'Web Designer' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Payroll Specialist' && data.level === 'Mid Level') {
    price.textContent='1,000'
    total.textContent='1,000'
    median.textContent='1,000'
    min.textContent='750'
    max.textContent='1,250'
    candidatesSalary.textContent='800'
    teilursFee.textContent='200'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Payroll Specialist' && data.level === 'Senior Level') {
    price.textContent='1,562'
    total.textContent='1,562'
    median.textContent='1,562'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,250'
    teilursFee.textContent='312'
    bar.style.width='50%' 
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Payroll Specialist' && data.level === 'Manager/Director Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='2,250'
    max.textContent='2,750'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Virtual Assistant' && data.level === 'Mid Level') {
    price.textContent='1,000'
    total.textContent='1,000'
    median.textContent='1,000'
    min.textContent='750'
    max.textContent='1,250'
    candidatesSalary.textContent='800'
    teilursFee.textContent='200'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Virtual Assistant' && data.level === 'Senior Level') {
    price.textContent='1,562'
    total.textContent='1,562'
    median.textContent='1,562'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,250'
    teilursFee.textContent='312'
    bar.style.width='50%' 
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Virtual Assistant' && data.level === 'Manager/Director Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='2,250'
    max.textContent='2,750'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Operations Coordinator' && data.level === 'Mid Level') {
    price.textContent='1,000'
    total.textContent='1,000'
    median.textContent='1,000'
    min.textContent='750'
    max.textContent='1,250'
    candidatesSalary.textContent='800'
    teilursFee.textContent='200'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Operations Coordinator' && data.level === 'Senior Level') {
    price.textContent='1,562'
    total.textContent='1,562'
    median.textContent='1,562'
    min.textContent='1,250'
    max.textContent='2,250'
    candidatesSalary.textContent='1,250'
    teilursFee.textContent='312'
    bar.style.width='50%' 
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Operations Coordinator' && data.level === 'Manager/Director Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='2,250'
    max.textContent='2,750'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Project Manager' && data.level === 'Mid Level') {
    price.textContent='3,125'
    total.textContent='3,125'
    median.textContent='3,125'
    min.textContent='2,500'
    max.textContent='3,750'
    candidatesSalary.textContent='2,300'
    teilursFee.textContent='625'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Project Manager' && data.level === 'Senior Level') {
    price.textContent='4,750'
    total.textContent='4,750'
    median.textContent='4,750'
    min.textContent='3,750'
    max.textContent='5,000'
    candidatesSalary.textContent='3,800'
    teilursFee.textContent='950'
    bar.style.width='50%' 
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Project Manager' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'HR & Internal Ops' && data.internal === 'Operations Coordinator' && data.level === 'Manager/Director Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='2,250'
    max.textContent='2,750'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Marketing Manager' && data.level === 'Mid Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Marketing Manager' && data.level === 'Senior Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Marketing Manager' && data.level === 'Manager/Director Level') {
    price.textContent='5,625'
    total.textContent='5,625'
    median.textContent='5,625'
    min.textContent='5,000'
    max.textContent='6,375'
    candidatesSalary.textContent='4,500'
    teilursFee.textContent='1,125'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Content Marketer' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Content Marketer' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Content Marketer' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'SEO Specialist' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'SEO Specialist' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'SEO Specialist' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Social Media Manager' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Social Media Manager' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Social Media Manager' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Brand Manager' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Brand Manager' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Brand Manager' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Digital Marketing Specialist' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Digital Marketing Specialist' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Digital Marketing Specialist' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Email Marketing' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Email Marketing' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Email Marketing' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Performance Marketing' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Performance Marketing' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Performance Marketing' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'PR Specialist' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'PR Specialist' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'PR Specialist' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Performance Marketing Specialist' && data.level === 'Mid Level') {
    price.textContent='1,250'
    total.textContent='1,250'
    median.textContent='1,250'
    min.textContent='1,000'
    max.textContent='1,875'
    candidatesSalary.textContent='1,000'
    teilursFee.textContent='250'
    bar.style.width='50%'
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Performance Marketing Specialist' && data.level === 'Senior Level') {
    price.textContent='2,500'
    total.textContent='2,500'
    median.textContent='2,500'
    min.textContent='1,875'
    max.textContent='3,125'
    candidatesSalary.textContent='2,000'
    teilursFee.textContent='500'
    bar.style.width='50%' 
    }else if(data.group === 'Marketing & Branding' && data.marketing === 'Performance Marketing Specialist' && data.level === 'Manager/Director Level') {
   price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='3,125'
    max.textContent='5,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Data Analyst' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Data Analyst' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Data Analyst' && data.level === 'Manager/Director Level') {
   price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'QA Analyst' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'QA Analyst' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'QA Analyst' && data.level === 'Manager/Director Level') {
   price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Business Intelligence' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Business Intelligence' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Business Intelligence' && data.level === 'Manager/Director Level') {
   price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Statistician' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Statistician' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Statistician' && data.level === 'Manager/Director Level') {
   price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Quantitative Analyst' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Quantitative Analyst' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Quantitative Analyst' && data.level === 'Manager/Director Level') {
   price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Data Visualization Specialist' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Data Visualization Specialist' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Data Visualization Specialist' && data.level === 'Manager/Director Level') {
   price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Analytics' && data.level === 'Mid Level') {
    price.textContent='3,750'
    total.textContent='3,750'
    median.textContent='3,750'
    min.textContent='2,500'
    max.textContent='4,000'
    candidatesSalary.textContent='3,000'
    teilursFee.textContent='750'
    bar.style.width='50%'
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Analytics' && data.level === 'Senior Level') {
    price.textContent='5,000'
    total.textContent='5,000'
    median.textContent='5,000'
    min.textContent='4,000'
    max.textContent='6,250'
    candidatesSalary.textContent='4,000'
    teilursFee.textContent='1,000'
    bar.style.width='50%' 
    }else if(data.group === 'Data & Analytics' && data.analytics === 'Analytics' && data.level === 'Manager/Director Level') {
    price.textContent='6,875'
    total.textContent='6,875'
    median.textContent='6,875'
    min.textContent='6,250'
    max.textContent='7,500'
    candidatesSalary.textContent='5,500'
    teilursFee.textContent='1,375'
    bar.style.width='50%'
    }
 }
   
   const submit = document.getElementById('submit')
submit.addEventListener('click', (e)=>{
  console.log(data)
  setPrice()
})


const selectGroup = document.getElementById('group-select') 
selectGroup.addEventListener('change', (e)=>{
  console.log('calculadora')
  data={
    ...data,
    group: e.target.value
  }
  console.log(data)
  select()
})

const selectExperience = document.getElementById('Development-Engineering') 
selectExperience.addEventListener('change', (e)=>{
  data={
    ...data,
    experience: e.target.value
  }
  console.log(data)
  select()
})

const selectSales = document.getElementById('Sales-Business-Dev') 
selectSales.addEventListener('change', (e)=>{
  data={
    ...data,
  sales: e.target.value
}
console.log(data)
select()
})

const selectProduct = document.getElementById('Product-Dev-Design') 
selectProduct.addEventListener('change', (e)=>{
  data={
    ...data,
  product: e.target.value
}
console.log(data)
select()
})

const selectFinance = document.getElementById('Finance-Accounting') 
selectFinance.addEventListener('change', (e)=>{
  data={
    ...data,
  finance: e.target.value
}
console.log(data)
select()
})

const selectInternal = document.getElementById('HR-Internal-Ops') 
selectInternal.addEventListener('change', (e)=>{
  data={
    ...data,
  internal: e.target.value
}
console.log(data)
select()
})

const selectMarketing = document.getElementById('Marketing-Branding') 
selectMarketing.addEventListener('change', (e)=>{
  data={
    ...data,
  marketing: e.target.value
}
console.log(data)
select()
})

const selectAnalytics = document.getElementById('Data-Analytics') 
selectAnalytics.addEventListener('change', (e)=>{
  data={
    ...data,
  analytics: e.target.value
}
console.log(data)
select()
})

const selectCountry = document.getElementById('group-country') 
selectCountry.addEventListener('change', (e)=>{
  data={
    ...data,
    country: e.target.value
  }
  console.log(data)
  select()
})

const selectLevel = document.getElementById('select-level') 
selectLevel.addEventListener('change', (e)=>{
  data={
    ...data,
    level: e.target.value
  }
  console.log(data)
  select()
})
