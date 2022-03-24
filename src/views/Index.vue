<template>
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-bind:router="true">
<!--                <el-submenu index="1">-->
<!--                    <template slot="title">用户管理</template>-->
<!--                    <el-menu-item index="/index/createEmployee">创建用户</el-menu-item>-->
<!--                    <el-menu-item index="/index/employeeList">维护信息</el-menu-item>-->
<!--                </el-submenu>-->
                <div style="line-height :50px;float: right;right:50px;position: relative">
                    <el-dropdown>
                    <span style="color:black">
                        <i class="el-icon-user-solid"></i>店长<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <router-link :to="{name:'login'}">
                                <el-dropdown-item>退出</el-dropdown-item>
                            </router-link>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-menu>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                activeIndex:'logo.jpg'
            }
        },
        computed: {
            username() {
                return this.$store.getters.userInfo.username;
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style >
    .el-header{
        background-color: grey;
        text-align: center;
        line-height: 100px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 500px;
    }
</style>