<template>
    <div class="not-found" dir="rtl">
        <h1 class="not-found__title">صفحه مورد نظر پیدا نشد</h1>
        <p class="not-found__description">متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
        <app-button class="not-found__button" @click="goToHome" size="large" scheme="primary">
            بازگشت به صفحه اصلی
        </app-button>
    </div>
</template>

<script setup lang="ts">
import { AppButton } from '@/common';
import { ROUTE_NAMES } from '@/enums';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToHome = () => {
    router.push({ name: ROUTE_NAMES.app })
}
</script>

<style lang="scss" scoped>
.not-found {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: toRem(20);

    &__image {
        width: toRem(300);
        margin-bottom: toRem(40);
    }

    &__title {
        font-size: toRem(32);
        margin-bottom: toRem(16);
        color: var(--text-primary-main);
    }

    &__description {
        font-size: toRem(18);
        margin-bottom: toRem(32);
        color: var(--text-secondary);
    }

    &__button {
        width: toRem(200);
    }
}
</style>