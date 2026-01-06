<script>
  let formData = $state({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  let submitting = $state(false);
  let submitted = $state(false);
  let error = $state('');

  // @ts-ignore
  async function handleSubmit(e) {
    e.preventDefault();
    submitting = true;
    error = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        submitted = true;

        // Reset form after success
        setTimeout(() => {
          submitted = false;
          formData = {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          };
        }, 5000);
      } else {
        error = result.error || 'Failed to send message. Please try again.';
      }
    } catch (err) {
      console.error('Form submission error:', err);
      error = 'An error occurred. Please try again or contact us directly.';
    } finally {
      submitting = false;
    }
  }
</script>

<section class="section-container bg-gradient-to-br from-gray-50 to-blue-50">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Get Started Today</h2>
      <p class="text-xl text-gray-600">
        Contact us for a free consultation. Available 24/7 by phone or text.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="card">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Call or Text</h3>
              <p class="text-gray-600 mb-2">Available 24/7</p>
              <a href="tel:7863699058" class="text-primary-600 font-semibold hover:underline"
                >786-369-9058</a
              ><br />
              <a href="tel:9546670855" class="text-primary-600 font-semibold hover:underline"
                >954-667-0855</a
              >
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Email Us</h3>
              <p class="text-gray-600 mb-2">We'll respond within 24 hours</p>
              <a
                href="mailto:info@jettaxservicecorp.com"
                class="text-primary-600 font-semibold hover:underline break-all"
                >info@jettaxservicecorp.com</a
              >
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Visit Us</h3>
              <p class="text-gray-600">
                4929 N University Drive<br />
                Lauderhill, FL 33351
              </p>
              <p class="text-sm text-gray-500 mt-2">Mon-Fri: 10am-5pm</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="card">
        {#if submitted}
          <div class="text-center py-12">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Thank You!</h3>
            <p class="text-gray-600">We'll be in touch shortly.</p>
          </div>
        {:else}
          <form onsubmit={handleSubmit} class="space-y-4">
            {#if error}
              <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <p class="font-medium">Error</p>
                <p class="text-sm">{error}</p>
              </div>
            {/if}

            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
                >Full Name *</label
              >
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label
              >
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="service" class="block text-sm font-medium text-gray-700 mb-1"
                >Service Interested In</label
              >
              <select
                id="service"
                bind:value={formData.service}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="personal-tax">Personal Tax Filing</option>
                <option value="business-tax">Business Tax Filing</option>
                <option value="tax-planning">Tax Planning</option>
                <option value="business-formation">Business Formation</option>
                <option value="bookkeeping">Bookkeeping</option>
                <option value="payroll">Payroll Services</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1"
                >Message *</label
              >
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              class="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>
