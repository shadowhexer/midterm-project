<script lang="ts">
import emailjs from '@emailjs/browser'

export default {
    name: "ContactView",
    data: () => ({
        formData: {
            name: "",
            email: "",
            message: "",
        },
        rules: {
            required: (value) => !!value || "This field is required",
            email: (value) => {
                const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return pattern.test(value) || "Invalid email format";
            },
        },
        max: 20,
        loading: false,
        valid: false,
    }),
    methods: {
        submitForm() {
            // Validate form before submitting
            if (!this.$refs.contactForm.validate()) {
                return;
            }

            this.loading = true;

            emailjs.send('service_qa1lqe7', 'template_55v2joq', {
                name: this.formData.name,
                email: this.formData.email,
                message: this.formData.message
            }, {
                publicKey: '_oRBEoxvD7FyJilip'
            })
                .then(() => {
                    alert("Form submitted successfully!");

                    // Optionally, reset the form after submission
                    this.formData = {
                        name: "",
                        email: "",
                        message: "",
                    };
                    this.$refs.contactForm.reset(); // Reset Vuetify form validation
                },
                    (error) => {
                        // Handle form submission error here
                        alert("Error submitting form: " + error.text);
                    })
                .finally(() => {
                    // Reset loading state
                    this.loading = false;
                });
        },

        maxNameLength(event) {
            if (this.formData.name.length > this.max) {
                this.formData.name = this.formData.name.slice(0, this.max);
            }
        }
    },
};
</script>

<template>
    <v-container class="mt-10 my-md-16 my-sm-16" width="700px">
        <v-row justify="center">
            <v-col cols="12">
                <v-card class="pa-4">
                    <v-card-title class="text-h4 mb-n3" align="center">
                        Feedback Form
                    </v-card-title>
                    <v-card-subtitle class="text-caption mb-6" align="center">
                        Feedback provided is automatically sent to my email.
                    </v-card-subtitle>
                    <v-form ref="contactForm" v-model="valid" @submit.prevent="submitForm">
                        <v-row>
                            <!-- Name Field -->
                            <v-col cols="12" md="6">
                                <v-text-field label="Name" v-model="formData.name" :rules="[rules.required]"
                                    :counter="max" @input="maxNameLength" placeholder="Full Name" outlined />
                            </v-col>

                            <!-- Email Field -->
                            <v-col cols="12" md="6">
                                <v-text-field label="Email" v-model="formData.email"
                                    :rules="[rules.required, rules.email]" placeholder="example@email.com" outlined />
                            </v-col>

                            <!-- Message Field -->
                            <v-col cols="12">
                                <v-textarea label="Message" v-model="formData.message" :rules="[rules.required]"
                                    placeholder="Write Message..." outlined rows="5" />
                            </v-col>
                        </v-row>

                        <!-- Submit Button -->
                        <v-card-actions class="mt-4 justify-space-around">
                            <v-btn color="#1ED98B" :loading="loading" :disabled="loading || !valid" @click="submitForm"
                                variant="flat" block>
                                Submit
                                <template v-slot:loader>
                                    <span>Loading...</span>
                                </template>
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<style scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}

@keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>