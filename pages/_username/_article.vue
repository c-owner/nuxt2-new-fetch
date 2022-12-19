<template>
  <div class="page-wrapper">
    <div class="article-content-wrapper">
      <article-block class="article-block" />
      <div class="aside-username-wrapper">
        <aside-username-block class="aside-username-block" />
      </div>
    </div>
    <comments-block class="comments-block" />
  </div>
</template>

<script>
import ArticleBlock from '@/components/blocks/ArticleBlock'
import CommentsBlock from '@/components/blocks/CommentsBlock'
import AsideUsernameBlock from '@/components/blocks/AsideUsernameBlock'

export default {
  components: {
    ArticleBlock,
    CommentsBlock,
    AsideUsernameBlock
  }
}
</script>