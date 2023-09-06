<!-- <template>

    <div class="contact">
        <h1>Leave Your Details Below and We'll be in Touch</h1>

<div class="d-flex justify-content-center">
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.599505543255!2d18.34755445558279!3d-34.039939997693104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc694646f0512d%3A0xd21975d52e780c14!2sSPAR%20Hout%20Bay!5e0!3m2!1sen!2sza!4v1693491174579!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="form">
        <form action="https://formspree.io/f/mdorzkkb" method="POST">

            <label>Name:</label>
            <input type="text" required v-model="name">

            <label>Email:</label>
            <input type="email" name="email" required v-model="email">

            <label>Send Message:</label>
            <input type="message" required v-model="message">
            <div class="terms">
                <input type="checkbox" v-model="terms" required>
                <label>Accept the terms and conditions</label>
            </div>
            <div class="btn">
                <button type="submit" value="">Submit</button>
            </div>
        </form>

    </div>
</div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            name: '',
            email: '',
            password: '',
            role: 'front-end',
            terms: false,
            error: '',
        }
    },

    methods: {
        addSkill(e) {
            if(e.key === ',' && this.initSkill) {
                if(!this.skills.includes(this.initSkill)) {
                    this.skills.push(this.initSkill)
                }
                this.initSkill = ''
            }
        },
    },
}
</script>

<style scoped>
    form{
        max-width: 400px;
        margin: 30px auto;
        background: #d9d9d9;
        padding: 40px;
        border-radius: 10px;
        text-align: left;
    }

    h1{
        text-align: center;
        margin-block: 20px;
        color: white;  
    }

    label{
        color: #000;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
    }

    input, select{
        /* display: block; */
        padding: 10px 6px;
        width: 100%;
        /* box-sizing: border-box; */
        border: none;
        border-bottom: 1px solid #000;
        /* color: #555; */
        background: #d9d9d9;
    }

    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    .skills{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #333;
        border-radius: 20px;
        font-size: 15px;
        font-weight: 700;
        color: #000;
        cursor: pointer;
    }

    button{
        background: #333;
        border: none;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }

    .btn{
        text-align: center;
    }


    @media screen and (max-width: 700px) {
        form{
            max-width: 300px;
        }    
    }
</style> -->
<template>
    <div>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>