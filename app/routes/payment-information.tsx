export default function PaymentInformationPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment Methods Accepted by Jingsourcing
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            The official payment methods that Jingsourcing accepts are listed in the following. If you have any questions about payments, or someone offers other payment information which is not listed here, please send an email to info@jingsourcing.com for further confirmation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">1. Wire Transfer From All Countries</h2>
            <p className="text-gray-600 mb-4">
              Wire transfer is the most frequently used method in international trading with the lowest transfer fee ($20 to $40 based on banks for any amount of USD payments).
            </p>
            <p className="text-gray-600 mb-6">
              Wire transfer is the most frequently used method in international trading with the lowest transfer fee ($20 to $40 based on banks for any amount of USD payments).
            </p>
            <p className="text-gray-600 mb-8">
              You can finish wire transfer by visiting local banks or using online wire transfer companies like Veem ($20 fee), Wise ($10-$30 fees). Please note we only accept USD payments.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-700"><strong>Account Name:</strong> Jingqosource Trading Co., Limited</p>
              <p className="text-gray-700"><strong>Account Number:</strong> 621483010782818345</p>
              <p className="text-gray-700"><strong>Account Address:</strong> Room 101, 828 Chengxin Ave, Yiwu, Zhejiang, China, Post code 322000.</p>
              <p className="text-gray-700"><strong>SWIFT / T Code:</strong> SZDBCCNBS</p>
              <p className="text-gray-700"><strong>Beneficiary Bank:</strong> PING AN BANK CO., LTD</p>
              <p className="text-gray-700"><strong>Bank Address:</strong> NO. 5047, ROAD SHENNAN DONG, SHENZHEN, P. R. CHINA</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">2. Payoneer</h2>
            <p className="text-gray-600 mb-4">
              Payoneer is quite popular with Amazon sellers to withdraw money from Amazon and arrange payment to suppliers. If you already have a Payoneer account and it has balance, you can directly pay to our Payoneer account.
            </p>
            <p className="text-gray-600 mb-6">
              Payoneer is quite popular with Amazon sellers to withdraw money from Amazon and arrange payment to suppliers. If you already have a Payoneer account and it has balance, you can directly pay to our Payoneer account.
            </p>
            <p className="text-gray-600 mb-8">
              Payoneer charges $1 fee for paying us in this way, but you still need to pay 0.5% more of the amount if you utilize the balance of Payoneer account, because it's the fee charged by Payoneer from our side.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-700"><strong>Our Payoneer Account:</strong> PAY@JINGQSOURCING.COM</p>
              <p className="text-gray-700"><strong>Account Name:</strong> Yiwu Jingqsourcing Ecommerce Co., Limited (义乌市京祺供应链电子商务有限公司)</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">3. PayPal</h2>
            <p className="text-gray-600 mb-6">
              PayPal is one of the most convenient payment methods for small orders. However, PayPal charges higher fees (around 4.4% + $0.3 of the total amount) and the money will be frozen for 21 days for new accounts.
            </p>
            <p className="text-gray-600 mb-8">
              PayPal is one of the most convenient payment methods for small orders. However, PayPal charges higher fees (around 4.4% + $0.3 of the total amount) and the money will be frozen for 21 days for new accounts.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-700"><strong>Our PayPal Account:</strong> PAY@JINGQSOURCING.COM</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">4. Alibaba Trade Assurance</h2>
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