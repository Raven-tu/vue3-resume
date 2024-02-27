<template>
  <main class="min-h-100vh w-full flex-rc px-16 py-10" text="gray-700 dark:gray-200">
    <article id="resume" w-700px>
      <RouterView />
    </article>

    <div id="nav-btn" class="abs-ct block print:hidden">
      <TheNavBtn />
    </div>
  </main>
</template>
