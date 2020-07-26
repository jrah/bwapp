<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="allBoardingSchoolGuardianships" col="0" row="0" />
    </GridLayout>
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script >
import gql from "graphql-tag";
export default {
  data() {
    return {
      msg: "Hello World!",
    };
  },
  apollo: {
    allBoardingSchoolGuardianships: gql`
      query getPages {
        allBoardingSchoolGuardianships {
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              _meta {
                id
                uid
                type
              }
            }
          }
        }
      }
    `,
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
