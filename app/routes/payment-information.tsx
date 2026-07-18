export default function PaymentInformationPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment Methods Accepted by TaiSourcing
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            The official payment methods that TaiSourcing accepts are listed in the following. If you have any questions about payments, or someone offers other payment information which is not listed here, please send an email to info@taisourcing.asia for further confirmation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">1. PayPal</h2>
            <p className="text-gray-600 mb-6">
              PayPal is one of the most convenient payment methods for small orders. However, PayPal charges higher fees (around 4.4% + $0.3 of the total amount) and the money will be frozen for 21 days for new accounts.
            </p>
            <p className="text-gray-600 mb-8">
              PayPal is one of the most convenient payment methods for small orders. However, PayPal charges higher fees (around 4.4% + $0.3 of the total amount) and the money will be frozen for 21 days for new accounts.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-700"><strong>Our PayPal Account:</strong> 17782584551@163.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">2. Alibaba Trade Assurance</h2>
            <p className="text-gray-600 mb-4">
              In order to provide more payment methods to meet different needs, our company has become Alibaba Gold Supplier to offer the Trade Assurance Payment service.
            </p>
            <p className="text-gray-600 mb-6">
              In order to provide more payment methods to meet different needs, our company has become Alibaba Gold Supplier to offer the Trade Assurance Payment service.
            </p>
            <p className="text-gray-600 mb-4">
              To finish the payment, you need to provide the Alibaba account email to your agent. Then your agent will help create a Trade Assurance Order on Alibaba, and guide you to finish the payment.
            </p>
            <p className="text-gray-600">
              Please note that you need to pay 2% more of the amount, because it's the fee charged by Alibaba from our side. Each payment should be less than $5,000, or we need to split the amount into several payments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}