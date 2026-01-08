// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string;
  }

  // interface Platform {}

  interface PrivateEnv {
    SANITY_WRITE_TOKEN: string;
  }

  interface PublicEnv {
    PUBLIC_SANITY_PROJECT_ID: string;
    PUBLIC_SANITY_DATASET: string;
    PUBLIC_SANITY_API_READ_TOKEN: string;
  }
}
