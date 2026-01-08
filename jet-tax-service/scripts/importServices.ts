import {createClient} from '@sanity/client'
import {config} from 'dotenv'
import {resolve} from 'path'

// Load environment variables from parent directory
config({path: resolve(__dirname, '../../.env')})

const client = createClient({
  projectId: '0rl1rny5',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
})

const services = [
  {
    id: 1,
    name: 'New Small Business Owner Consultation',
    price: '$150',
    description:
      'A new small business consultation saves time and money by offering expert advice to streamline start up operations, avoid costly mistakes, and ensure compliance with legal and regulatory requirements.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/PXHPYDBFIX2SM5CDWBTPF74E',
  },
  {
    id: 2,
    name: 'Small Business Owner Consultation',
    price: '$175',
    description:
      'A small business consultation provides expert guidance tailored to your unique needs, helping you optimize operations, increase profitability, and ensure compliance with legal and financial requirements.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/G27K2ZH2RFFR4SXSUKDWUXA4',
  },
  {
    id: 3,
    name: 'New Business Entity Formation',
    price: '$210',
    description: 'LLC, LLC Partnership, SCorp, Corp',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/A5F6SJ6KVTADZKOJ5QRJUZ6N',
  },
  {
    id: 4,
    name: 'IRS EIN Filing',
    price: '$75',
    description: 'Required to open a business bank account.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/73VKJ6OGRNFXU4AZGI4BPR6I?src=sheet',
  },
  {
    id: 5,
    name: 'Annual Compliance Maintenance Package (CMP)',
    price: '$168.75',
    description: 'Receive 15% off other business services when enrolled in the CMP.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/PBJDMHBCFWBXW3KW5KZXGIHP',
  },
  {
    id: 6,
    name: 'IRS Notice Review for Small Businesses',
    price: '$125',
    description:
      'REVIEW AND CREATE PLAN A COURSE OF ACTION TO RESOLVE YOUR TAX ISSUE. PENALTY WAIVERS ARE ADDITIONAL.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/K7RSI7UN6PZJP3N2A2FLGWPX',
  },
  {
    id: 7,
    name: 'Annual Fraud Alert Package',
    price: '$75',
    description:
      'Fraud costs consumers $10B annually. Enroll now to securely upload notices or emails for review by our expert fraud team.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/F5HFGKG6BWRJZIH7VQNPM5ZE',
  },
  {
    id: 8,
    name: 'State Amendment Filing',
    price: '$50',
    description: '',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/SQU3YAXAT44FL5JO6NLUWPN4',
  },
  {
    id: 9,
    name: 'Beneficial Ownership Information Report (BOI)',
    price: '$95',
    description:
      'The Beneficial Ownership Information (BOI) program, established by the federal government, advises small businesses to disclose identifying information about individuals who directly or indirectly own or exercise control over the company.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/RPOCLR4JOYVWWITXP4EKSH3F',
  },
  {
    id: 10,
    name: 'S-Corp Election & Formation',
    price: '$500',
    description: 'S-Corporation setup and IRS Form 2553',
    category: 'Business Services',
    squareLink: 'https://square.link/u/PLACEHOLDER10',
  },
  {
    id: 11,
    name: 'State Annual Filing',
    price: '$178.75',
    description:
      'Accurate Filing with the State Business Registry to keep your business in compliance to avoid expensive penalties. State Filing Fee included. FREE OF CHARGE we will become your REGISTERED AGENT due to you being a tax client of our firm. We will keep your business in compliance saving you potentially thousands in late fees.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/MKM5PN6VZCBVD7KEGCK7SPRD',
  },
  {
    id: 12,
    name: 'Profit and Loss',
    price: '$300',
    description: '',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/AAX52MS2JODRJ73UCEJ2ZQX5',
  },
  {
    id: 13,
    name: 'State Late Filing Resolution',
    price: '$290',
    description:
      'ALL FEES INCLUDED. Unlike other companies that charge a separate filing fee. We have contacted the State on your behalf to settle for a lower for a discounted late fee instead of the $500 late fee that is normally charged for filings after May 1st.',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/CZJ5WUFJW4POYGK2N77FFIIJ',
  },
  {
    id: 14,
    name: 'Balance Sheet',
    price: '$400',
    description: '',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/HOD4QV3K36TZJRCAFNXRFJDR',
  },
  {
    id: 15,
    name: 'Custom Business Expense Tracker',
    price: '$40',
    description: '',
    category: 'Business Services',
    squareLink:
      'https://checkout.square.site/merchant/ML6RS9XVHRCPF/checkout/AZA3TRGEBB3ABCJYEAOWOWRZ',
  },
]

async function importServices() {
  console.log('Starting import of services...')

  for (const service of services) {
    const {id, ...serviceData} = service

    try {
      const doc = {
        _type: 'service',
        displayOrder: id,
        ...serviceData,
      }

      const result = await client.create(doc)
      console.log(`✓ Imported: ${service.name} (${result._id})`)
    } catch (error) {
      console.error(`✗ Failed to import ${service.name}:`, error)
    }
  }

  console.log('\nImport completed!')
}

importServices().catch((error) => {
  console.error('Import failed:', error)
  process.exit(1)
})
