<script>
  // @ts-nocheck

  import { page } from '$app/stores';

  const resourcesData = {
    'business-tax-checklist': {
      title: 'Business Tax Filing Checklist',
      category: 'Tax Filing',
      icon: '🏢',
      description:
        'Provide the following documents and information to ensure accurate and timely preparation of your business tax return. Upload all relevant tax documents to your existing portal account or go to our website to sign up for a portal account.',
      sections: [
        {
          title: 'General Business Information',
          items: [
            'Business name, address, and contact information',
            'Federal Employer Identification Number (EIN)',
            'State Tax ID (if applicable)',
            'Business entity type (e.g., LLC, S-Corp, C-Corp, Partnership, Sole Proprietor)',
            'Business formation documents (e.g., Articles of Incorporation/Organization)',
            "Prior year's tax return"
          ]
        },
        {
          title: 'Income Documentation',
          items: [
            'Bank statements (business checking/savings accounts)',
            'Income records (e.g., sales, receipts, invoices)',
            'Form 1099-NEC/MISC/K (for payments received)',
            'Interest income statements (Form 1099-INT or similar)',
            'Rental income records (if applicable)'
          ]
        },
        {
          title: 'Expense Documentation',
          items: [
            'Receipts for all business-related expenses',
            'Rent or lease payments (office space, equipment)',
            'Utility bills (electricity, internet, phone)',
            'Advertising and marketing expenses',
            'Professional fees (e.g., legal, accounting)',
            'Employee salaries and benefits',
            'Contractor payments (including Forms 1099 issued)',
            'Travel, meal, and entertainment expenses (with supporting documentation)',
            'Vehicle expenses (mileage logs or actual expense records)'
          ]
        },
        {
          title: 'Assets and Depreciation',
          items: [
            'List of business assets (purchased, sold, or disposed during the year)',
            'Purchase date, price, and documentation for new equipment or property',
            'Depreciation schedules from previous years'
          ]
        },
        {
          title: 'Inventory (if applicable)',
          items: [
            'Inventory valuation at the beginning and end of the year',
            'Cost of goods sold (COGS) calculation and records'
          ]
        },
        {
          title: 'Tax Documents',
          items: [
            'Estimated tax payments made (dates and amounts)',
            'Payroll tax filings (Forms 940, 941, W-2, W-3)',
            'Sales tax filings (if applicable)',
            'Property tax payments for business assets'
          ]
        },
        {
          title: 'Loan and Financing Records',
          items: [
            'Loan agreements and repayment schedules',
            'Interest paid on business loans (Form 1098 or equivalent)',
            'Line of credit statements'
          ]
        },
        {
          title: 'Additional Documentation',
          items: [
            'Home office deduction details (if applicable): square footage of home vs. office space, utility bills, and insurance',
            'Health insurance premiums paid for employees or self',
            'Retirement contributions (e.g., SEP IRA, SIMPLE IRA)',
            'Details on any grants or government assistance received (e.g., PPP loan forgiveness documents)',
            'Any correspondence from the IRS or state tax authorities'
          ]
        },
        {
          title: 'Tips for Submission',
          items: [
            'Organize documents digitally or in labeled folders',
            'Highlight any significant changes from the previous year (new hires, new locations, etc.)',
            'Provide your tax preparer with contact information for questions or clarifications'
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
        "Starting a business is exciting but requires careful planning and organization to ensure financial and tax compliance. Here's a step-by-step checklist to guide you through your first year of business ownership. Sign up for a New Small Business Consult on our website to help you start your business quickly, efficiently, ensure compliance (saving time & money), and receive discounted ongoing support.",
      sections: [
        {
          title: '1. Business Formation and Legal Setup',
          items: [
            'Choose a Business Structure: Sole proprietorship, LLC, partnership, corporation, etc.',
            'Register Your Business Name',
            'Obtain an EIN (Employer Identification Number)',
            'Open a Business Bank Account'
          ]
        },
        {
          title: '2. Licensing and Permits',
          items: [
            'Research federal, state, and local licenses or permits required for your industry',
            'Keep documentation for annual renewals and compliance'
          ]
        },
        {
          title: '3. Accounting and Record keeping',
          items: [
            'Set Up an Accounting System: Use software (QuickBooks, Xero, etc.) or hire a professional (We offer specialized Growth Book Keeping plans for businesses with Revenues under $50,000)',
            'Track Expenses: Categorize receipts and invoices for easy tax preparation',
            'Monitor Cash Flow: Regularly review income and expenses to maintain financial health',
            'Retain Business Records: Store records for at least 3–7 years (depending on requirements)'
          ]
        },
        {
          title: '4. Tax Compliance',
          items: [
            'Understand Your Tax Obligations: Income tax (quarterly estimates may be required), self-employment tax (if applicable), sales tax (if selling goods or services in taxable industries), payroll tax (if you hire employees)',
            "Register for State Tax Accounts: Contact your state's tax office",
            'Set Tax Deadlines: Use a calendar to track due dates for tax filings and payments',
            'Hire a Tax Professional: JET TAX SERVICE CORP can help ensure compliance and maximize deductions'
          ]
        },
        {
          title: '5. Business Insurance',
          items: [
            "Obtain necessary coverage: General liability, professional liability, workers' compensation, etc."
          ]
        },
        {
          title: '6. Marketing and Branding',
          items: [
            'Develop a marketing plan and define your target audience',
            'Create a website and establish a presence on social media',
            'Network and promote your services/products'
          ]
        },
        {
          title: '7. Employment and HR',
          items: [
            'Understand labor laws and establish HR policies',
            'If hiring, file necessary employee paperwork (W-4, I-9, etc.)',
            'Set up payroll and ensure proper tax withholding'
          ]
        },
        {
          title: '8. Financial Growth and Planning',
          items: [
            'Set short- and long-term business goals',
            'Consider business loans or lines of credit if needed for growth',
            'Regularly review financial statements to adjust strategies'
          ]
        },
        {
          title: '9. Stay Educated',
          items: [
            'Our team at Jet Tax Service Corp will keep you informed about changes in tax laws and regulations'
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

  // SEO helpers
  // @ts-ignore
  const getKeywords = (slug) => {
    // @ts-ignore
    const keywordMap = {
      'personal-tax-filing-checklist':
        'personal tax checklist, tax filing documents, W-2 forms, 1099 forms, tax return preparation, individual tax filing, tax documentation',
      'business-tax-checklist':
        'business tax checklist, business tax filing, business tax documents, corporate tax preparation, business tax compliance, EIN, business expenses',
      'first-year-business-checklist':
        'new business checklist, business formation, startup checklist, business license, EIN application, business setup, first year business',
      'tax-deduction-guide':
        'tax deductions, business deductions, personal deductions, tax savings, deductible expenses, tax planning',
      'quarterly-tax-calendar':
        'tax calendar, quarterly taxes, tax deadlines, estimated taxes, tax payment dates, tax filing dates',
      'bookkeeping-best-practices':
        'bookkeeping, accounting, financial records, bookkeeping tips, business finances, accounting software'
    };
    return keywordMap[slug] || 'tax resources, business resources, tax planning';
  };

  // @ts-ignore
  const getArticleType = (slug) => {
    if (
      slug === 'business-tax-checklist' ||
      slug === 'personal-tax-filing-checklist' ||
      slug === 'first-year-business-checklist'
    ) {
      return 'HowTo';
    }
    return 'Article';
  };
</script>

<svelte:head>
  {#if resource}
    <title>{resource.title} | JET Tax Service Corp</title>
    <meta name="description" content={resource.description} />
    <meta name="keywords" content={getKeywords(slug)} />
    <link rel="canonical" href="https://jettaxservicecorp.com/resources/{slug}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://jettaxservicecorp.com/resources/{slug}" />
    <meta property="og:title" content="{resource.title} | JET Tax Service Corp" />
    <meta property="og:description" content={resource.description} />
    <meta property="og:image" content="https://jettaxservicecorp.com/og-image.jpg" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="JET Tax Service Corp" />
    <meta property="article:publisher" content="JET Tax Service Corp" />
    <meta property="article:section" content={resource.category} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://jettaxservicecorp.com/resources/{slug}" />
    <meta name="twitter:title" content="{resource.title} | JET Tax Service Corp" />
    <meta name="twitter:description" content={resource.description} />
    <meta name="twitter:image" content="https://jettaxservicecorp.com/og-image.jpg" />

    <!-- Additional SEO -->
    <meta name="author" content="JET Tax Service Corp" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />

    <!-- JSON-LD Structured Data -->
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "${getArticleType(slug)}",
      "headline": "${resource.title}",
      "description": "${resource.description.replace(/"/g, '\\"')}",
      "url": "https://jettaxservicecorp.com/resources/${slug}",
      "author": {
        "@id": "https://jettaxservicecorp.com/#organization"
      },
      "publisher": {
        "@id": "https://jettaxservicecorp.com/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jettaxservicecorp.com/resources/${slug}"
      },
      "articleSection": "${resource.category}",
      "keywords": "${getKeywords(slug)}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jettaxservicecorp.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resources",
            "item": "https://jettaxservicecorp.com/resources"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${resource.title}",
            "item": "https://jettaxservicecorp.com/resources/${slug}"
          }
        ]
      }
    }
    </script>`}
  {:else}
    <title>Resource Not Found | JET Tax Service Corp</title>
    <meta name="robots" content="noindex, nofollow" />
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
