import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isValidToken, SESSION_COOKIE } from '@/lib/auth';

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies();
  const session = store.get(SESSION_COOKIE);

  if (!isValidToken(session?.value)) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-brand-offwhite">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  );
}
