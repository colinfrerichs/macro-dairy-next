"use client";

import { signOut } from "@/lib/auth/actions";

import Button from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div>
      <h2>DashboardPage</h2>
      <Button text="Sign out" action={signOut} />
    </div>
  );
};

export default DashboardPage;
