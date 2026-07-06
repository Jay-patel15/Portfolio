-- Run this in the Supabase SQL editor for your project.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Allow anonymous visitors to submit the contact form (insert-only).
create policy "Allow public insert on contact_messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- No select/update/delete policy is granted to anon, so submissions
-- are write-only from the client and only readable via the dashboard
-- or a service-role key on the server.
