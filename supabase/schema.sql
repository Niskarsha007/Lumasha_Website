-- Lumasha admin-ready schema for Supabase
create table if not exists public.products (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text,
  price numeric(10,2) not null,
  badge text,
  status text check (status in ('in-stock','preorder','sold-out')) default 'in-stock',
  image_url text,
  tags text[],
  preorder boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  total numeric(10,2) not null,
  currency text default 'USD',
  status text check (status in ('pending','paid','fulfilled','cancelled')) default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.order_items (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.orders(id) on delete cascade,
  product_id uuid references public.products(id),
  quantity integer default 1,
  price numeric(10,2)
);

create table if not exists public.games (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text,
  age_range text,
  free_demo boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.users_profile (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  preferred_language text default 'en',
  created_at timestamptz default now()
);
