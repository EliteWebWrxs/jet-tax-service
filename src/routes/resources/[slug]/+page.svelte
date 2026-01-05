<script>
  import { page } from '$app/stores';

  const resourcesData = {
    'business-tax-checklist': {
      title: 'Business Tax Documents Checklist',
      category: 'Tax Filing',
      icon: '🏢',
      description: 'Everything you need to prepare accurate and complete business tax returns.',
      sections: [
        {
          title: 'Business Income Records',
          items: [
            'Annual profit & loss statement',
            'Sales records and 1099-K forms',
            'Merchant account statements',
            'Bank statements for all business accounts',
            'Investment income (1099-INT, 1099-DIV)',
            'Rental income from business property'
          ]
        },
        {
          title: 'Expense Documentation',
          items: [
            'Receipts for major purchases',
            'Vehicle mileage logs',
            'Home office expense calculations',
            'Insurance premiums',
            'Professional fees (legal, accounting)',
            'Advertising and marketing expenses',
            'Office supplies and equipment'
          ]
        },
        {
          title: 'Payroll & Employee Records',
          items: [
            'Payroll reports and summaries',
            'Form 941 quarterly filings',
            'W-2 and W-3 forms',
            '1099-NEC for contractors',
            'State unemployment tax records'
          ]
        },
        {
          title: 'Business Information',
          items: [
            'EIN (Employer Identification Number)',
            'Business licenses and permits',
            'Partnership or corporate documents',
            'Depreciation schedules',
            'Prior year business returns'
          ]
        }
      ],
      downloadLink: '/docs/Jet-Tax-Business-Tax-Checklist.pdf'
    },
    'first-year-business-checklist': {
      title: 'First-Year Business Owner Checklist',
      category: 'Business Formation',
      icon: '🚀',
      description:
        'A complete guide for new entrepreneurs to successfully launch and manage their business.',
      sections: [
        {
          title: 'Pre-Launch Essentials',
          items: [
            'Choose your business structure (LLC, Corp, etc.)',
            'Select and register business name',
            'Apply for EIN from IRS',
            'Register with state and local authorities',
            'Open business bank account',
            'Set up accounting system'
          ]
        },
        {
          title: 'Legal & Compliance',
          items: [
            'Obtain necessary business licenses',
            'Apply for sales tax permit (if needed)',
            'Get business insurance',
            'Create operating agreement or bylaws',
            'File beneficial ownership information (BOI)',
            'Set up registered agent service'
          ]
        },
        {
          title: 'Financial Setup',
          items: [
            'Choose accounting method (cash vs. accrual)',
            'Set up bookkeeping system',
            'Establish business credit',
            'Plan for estimated quarterly taxes',
            'Set up payroll (if hiring employees)',
            'Create budget and financial projections'
          ]
        },
        {
          title: 'Ongoing Operations',
          items: [
            'Maintain separate business and personal finances',
            'Track all business expenses',
            'Keep organized records',
            'File annual reports and renewals',
            'Review and update business plan',
            'Schedule regular financial reviews'
          ]
        }
      ],
      downloadLink: '/docs/Jet-Tax-First-Year-Business-Owner-Checklist.pdf'
    },
    'tax-deduction-guide': {
      title: 'Tax Deduction Guide',
      category: 'Tax Planning',
      icon: '💰',
      description:
        'Maximize your tax savings with this comprehensive guide to common and often-overlooked deductions.',
      sections: [
        {
          title: 'Business Expense Deductions',
          items: [
            'Home office deduction (if qualified)',
            'Business vehicle expenses',
            'Equipment and supplies',
            'Professional development and education',
            'Business travel and meals',
            'Marketing and advertising costs',
            'Insurance premiums',
            'Retirement plan contributions'
          ]
        },
        {
          title: 'Personal Deductions',
          items: [
            'Mortgage interest (up to limits)',
            'State and local taxes (SALT)',
            'Charitable contributions',
            'Medical expenses (above 7.5% AGI)',
            'Student loan interest',
            'Retirement contributions (IRA, 401k)',
            'Health Savings Account (HSA) contributions'
          ]
        },
        {
          title: 'Investment-Related Deductions',
          items: [
            'Investment interest expenses',
            'Tax preparation fees',
            'Safe deposit box fees',
            'Investment advisory fees (limited)'
          ]
        }
      ]
    },
    'quarterly-tax-calendar': {
      title: 'Quarterly Tax Calendar',
      category: 'Tax Planning',
      icon: '📅',
      description: 'Never miss a tax deadline with our comprehensive calendar of important dates.',
      sections: [
        {
          title: 'Q1 - January to March',
          items: [
            'January 15: Q4 estimated tax payment due',
            'January 31: W-2 and 1099 forms due to recipients',
            'January 31: Form 941 due (Q4 payroll taxes)',
            'February 15: Corporate S-Corp election deadline',
            'March 15: Partnership and S-Corp return deadline'
          ]
        },
        {
          title: 'Q2 - April to June',
          items: [
            'April 15: Individual tax return deadline',
            'April 15: Q1 estimated tax payment due',
            'April 30: Form 941 due (Q1 payroll taxes)',
            'June 15: Q2 estimated tax payment due'
          ]
        },
        {
          title: 'Q3 - July to September',
          items: [
            'July 31: Form 941 due (Q2 payroll taxes)',
            'September 15: Q3 estimated tax payment due',
            'September 15: Extended corporate returns due',
            'October 15: Extended individual returns due'
          ]
        },
        {
          title: 'Q4 - October to December',
          items: [
            'October 31: Form 941 due (Q3 payroll taxes)',
            'December 31: Business expense deadline',
            'December 31: Retirement contribution deadline'
          ]
        }
      ]
    },
    'bookkeeping-best-practices': {
      title: 'Bookkeeping Best Practices',
      category: 'Business Operations',
      icon: '📚',
      description:
        'Essential bookkeeping tips to keep your business finances organized and accurate.',
      sections: [
        {
          title: 'Daily Habits',
          items: [
            'Record all transactions immediately',
            'Save and organize receipts digitally',
            'Separate business and personal expenses',
            'Reconcile cash and card transactions',
            'Track mileage for business travel'
          ]
        },
        {
          title: 'Weekly Tasks',
          items: [
            'Review accounts receivable',
            'Process vendor bills',
            'Update inventory records',
            'Review bank feeds in accounting software',
            'Categorize all transactions'
          ]
        },
        {
          title: 'Monthly Responsibilities',
          items: [
            'Reconcile all bank and credit card accounts',
            'Review profit & loss statement',
            'Check accounts receivable aging',
            'Prepare and send invoices',
            'Pay bills and manage cash flow',
            'Review budget vs. actual'
          ]
        },
        {
          title: 'Best Practices',
          items: [
            'Use accounting software (QuickBooks, Xero, etc.)',
            'Maintain a chart of accounts',
            'Keep business and personal finances separate',
            'Back up financial data regularly',
            'Work with a professional accountant',
            'Stay current on tax laws and requirements'
          ]
        }
      ]
    },
    'personal-tax-filing-checklist': {
      title: 'Personal Tax Filing Checklist',
      category: 'Tax Filing',
      icon: '📝',
      description:
        'Comprehensive checklist of documents and information needed to ensure accurate and timely preparation of your personal tax return.',
      sections: [
        {
          title: 'Personal Information',
          items: [
            'Full name, Social Security Number (SSN), and date of birth for yourself, your spouse, and any dependents',
            "A copy of last year's tax return (if not already with the tax preparer)",
            'Bank account details (routing and account numbers) for direct deposit of any refund'
          ]
        },
        {
          title: 'Employment Income',
          items: [
            'W-2 forms from all employers',
            '1099-NEC, 1099-K, or any other income documentation for self-employment',
            'Detailed record of business income and expenses for self-employed individuals'
          ]
        },
        {
          title: 'Investment & Retirement Income',
          items: [
            '1099-INT (interest income)',
            '1099-DIV (dividends)',
            '1099-B (sale of investments, including cost basis)',
            '1099-R for retirement distributions',
            'SSA-1099 for Social Security benefits'
          ]
        },
        {
          title: 'Other Income',
          items: [
            '1099-G (unemployment or state tax refunds)',
            'Alimony received (if applicable)',
            'Rental income records',
            'Any other income documentation'
          ]
        },
        {
          title: 'Education Expenses',
          items: [
            'Form 1098-T for tuition payments',
            'Records of student loan interest (Form 1098-E)',
            'Education-related expense receipts'
          ]
        },
        {
          title: 'Medical & Health Insurance',
          items: [
            'Out-of-pocket medical, dental, or vision expenses',
            'Health insurance premiums paid',
            'Form 1095-A if you purchased insurance through the Healthcare Marketplace',
            'HSA or FSA contribution records'
          ]
        },
        {
          title: 'Deductions & Credits',
          items: [
            'Charitable donation receipts (cash and non-cash)',
            "Childcare expenses with provider's name, address, SSN/EIN, and amount paid",
            'Form 1098 (mortgage interest)',
            'Property tax payment records',
            'IRA or retirement account contributions',
            'Job-related expenses (if eligible under current tax law)'
          ]
        },
        {
          title: 'Miscellaneous',
          items: [
            'Records of estimated tax payments made during the year',
            'Details of any stimulus payments or advanced child tax credit received',
            'Any correspondence from the IRS or state tax agency',
            'Documentation of any major life changes (marriage, divorce, birth, adoption)'
          ]
        }
      ],
      downloadLink: '/docs/Jet-Tax-Personal-Tax-Checklist.pdf'
    }
  };

  const slug = $derived($page.params.slug);
  // @ts-ignore
  const resource = $derived(resourcesData[slug]);
</script>

<svelte:head>
  {#if resource}
    <title>{resource.title} | JET Tax Service Corp</title>
    <meta name="description" content={resource.description} />
  {:else}
    <title>Resource Not Found | JET Tax Service Corp</title>
  {/if}
</svelte:head>

{#if resource}
  <!-- Header -->
  <section
    class="bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white py-16"
  >
    <div class="section-container">
      <div class="max-w-4xl mx-auto">
        <a
          href="/resources"
          class="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Resources
        </a>
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-4xl"
          >
            {resource.icon}
          </div>
          <div>
            <div class="text-sm text-blue-100 font-semibold mb-1">{resource.category}</div>
            <h1 class="text-4xl md:text-5xl font-bold">{resource.title}</h1>
          </div>
        </div>
        <p class="text-xl text-blue-100">{resource.description}</p>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="section-container">
    <div class="max-w-4xl mx-auto">
      <!-- Download CTA -->
      {#if resource.downloadLink}
        <div class="card bg-gradient-to-r from-primary-600 to-secondary-600 text-white mb-12">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 class="text-2xl font-bold mb-2">Download This Checklist</h2>
              <p class="text-blue-100">Get a printable PDF version for easy reference</p>
            </div>
            <a
              href={resource.downloadLink}
              class="btn bg-white text-primary-700 hover:bg-gray-100 flex-shrink-0"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      {/if}

      <!-- Sections -->
      <div class="space-y-8">
        {#each resource.sections as section}
          <div class="card">
            <h2 class="text-2xl font-bold mb-6 text-primary-700">{section.title}</h2>
            <ul class="space-y-3">
              {#each section.items as item}
                <li class="flex items-start gap-3">
                  <svg
                    class="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-gray-700 leading-relaxed">{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>

      <!-- CTA -->
      <div class="mt-12 card bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">Need Help With Your Taxes or Business?</h3>
          <p class="text-gray-600 mb-6">
            Our experienced team is here to assist you with all your tax and business needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn btn-primary"> Contact Us </a>
            <a href="tel:7863699058" class="btn btn-outline"> Call 786-369-9058 </a>
          </div>
        </div>
      </div>
    </div>
  </section>
{:else}
  <!-- 404 Not Found -->
  <section class="section-container">
    <div class="max-w-2xl mx-auto text-center py-20">
      <div class="text-6xl mb-6">❌</div>
      <h1 class="text-4xl font-bold mb-4">Resource Not Found</h1>
      <p class="text-xl text-gray-600 mb-8">
        Sorry, the resource you're looking for doesn't exist.
      </p>
      <a href="/resources" class="btn btn-primary"> Back to Resources </a>
    </div>
  </section>
{/if}
