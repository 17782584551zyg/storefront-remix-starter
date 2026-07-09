import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BACKEND_URL } from '~/constants';

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/admin-api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer superadmin',
      },
      body: JSON.stringify({
        query: `{
          contactForms(take: 100, skip: 0) {
            items {
              id
              firstName
              lastName
              email
              phone
              country
              company
              message
              source
              createdAt
            }
            totalItems
          }
        }`,
      }),
    });
    
    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return json({
        contactForms: [],
        totalItems: 0,
        error: data.errors[0]?.message || 'Failed to fetch data',
      });
    }
    
    return json({
      contactForms: data.data?.contactForms?.items || [],
      totalItems: data.data?.contactForms?.totalItems || 0,
      error: null,
    });
  } catch (error) {
    console.error('Fetch error:', error);
    return json({
      contactForms: [],
      totalItems: 0,
      error: 'Failed to connect to backend',
    });
  }
};

export default function AdminContactForms() {
  const { contactForms, totalItems, error } = useLoaderData<{ 
    contactForms: Array<{
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      company: string;
      message: string;
      source: string;
      createdAt: string;
    }>;
    totalItems: number;
    error: string | null;
  }>();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h1>
            <span className="text-sm text-gray-500">{totalItems} records</span>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">Error: {error}</p>
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contactForms.map((form) => (
                  <tr key={form.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{form.id}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {form.firstName} {form.lastName}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{form.email}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{form.phone || '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{form.country || '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{form.company || '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        form.source === 'services' ? 'bg-blue-100 text-blue-800' :
                        form.source === 'monthly-report' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {form.source === 'services' ? 'Services' :
                         form.source === 'monthly-report' ? 'Monthly Report' :
                         (form.source || 'Unknown')}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(form.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {contactForms.length === 0 && !error && (
            <div className="text-center py-12">
              <p className="text-gray-500">No submissions found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}