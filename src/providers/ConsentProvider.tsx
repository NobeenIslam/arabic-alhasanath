'use client';

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react';
import {
  COOKIE_CONSENT_KEY,
  type ConsentStatus,
} from '@/lib/constants/cookies.constants';

interface ConsentContextValue {
  consentStatus: ConsentStatus;
  acceptConsent: () => void;
  declineConsent: () => void;
  isLoading: boolean;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

const consentListeners = new Set<() => void>();

const subscribeToConsent = (listener: () => void) => {
  consentListeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    consentListeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
};

const readStoredConsent = (): ConsentStatus => {
  const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (storedConsent === 'accepted' || storedConsent === 'declined') {
    return storedConsent;
  }
  return null;
};

const storeConsent = (status: Exclude<ConsentStatus, null>) => {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, status);
  consentListeners.forEach((listener) => listener());
};

export const ConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const consentStatus = useSyncExternalStore(
    subscribeToConsent,
    readStoredConsent,
    () => null
  );
  const isLoading = useSyncExternalStore(
    subscribeToConsent,
    () => false,
    () => true
  );

  const acceptConsent = useCallback(() => storeConsent('accepted'), []);
  const declineConsent = useCallback(() => storeConsent('declined'), []);

  const value = useMemo(
    () => ({
      consentStatus,
      acceptConsent,
      declineConsent,
      isLoading,
    }),
    [consentStatus, acceptConsent, declineConsent, isLoading]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextValue => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};
